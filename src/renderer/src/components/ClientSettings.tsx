import React, { useState, useEffect } from 'react'

export function ClientSettings(): React.JSX.Element {
  const [directory, setDirectory] = useState<string>('')
  const [directoryValid, setDirectoryValid] = useState<boolean>(true)

  const handlePickDirectory = async (): Promise<void> => {
    const result = await window.electron.ipcRenderer.invoke('pick-game-client-directory')
    if (result && !result.canceled) {
      window.electron.ipcRenderer.send('gameClientDirectorySelected', result.filePaths[0])
    }
    setDirectory(result.filePaths[0] || '')
  }

  useEffect(() => {
    const handler = (_event: Electron.IpcRendererEvent, isValid: boolean): void => {
      setDirectoryValid(isValid)
    }

    const unsubscribe = window.electron.ipcRenderer.on('gameClientDirectoryValid', handler)
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className="text-center">
      <h2>Select the League of Legends Client File (where LeagueofLegends.exe stands)</h2>
      <div>
        <h3>Current Directory: {directory}</h3>
        <button onClick={handlePickDirectory}>Select</button>
      </div>
      {!directoryValid && (
        <p style={{ color: 'red' }}>
          The Game Client file was not found in the selected directory. Please select the correct
          folder.
        </p>
      )}
    </div>
  )
}
