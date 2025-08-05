import React, { useEffect, useState } from 'react'

export function SettingsField(): React.JSX.Element {
  const [directory, setDirectory] = useState<string>('')
  const [directoryValid, setDirectoryValid] = useState<boolean>(true)

  // Function to handle directory selection
  // This function is called when the user clicks the "Select" button
  // It invokes the IPC method to open a dialog for selecting the directory and sends the selected directory path to the main process
  const handlePickDirectory = async (): Promise<void> => {
    const result = await window.electron.ipcRenderer.invoke('pick-chronobreak-directory')
    if (result && !result.canceled) {
      window.electron.ipcRenderer.send('chronobreakDirectorySelected', result.filePaths[0])
    }
    setDirectory(result.filePaths[0] || '')
  }

  // Receives the directory validity status from the main webContents process
  useEffect(() => {
    const handler = (_event: Electron.IpcRendererEvent, isValid: boolean): void => {
      setDirectoryValid(isValid)
    }

    // Listen for the 'chronobreakDirectoryValid' event
    // The event listener will be removed when the component unmounts to prevent memory leaks
    const unsubscribe = window.electron.ipcRenderer.on('chronobreakDirectoryValid', handler)
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div>
      <h2>Select the Chronobreak Game Server File (where GameServerConsole.exe stands)</h2>
      <h3>Current Directory: {directory}</h3>
      <button onClick={handlePickDirectory}>Select</button>
      {!directoryValid && (
        <p style={{ color: 'red' }}>
          The GameServerConsole.exe file was not found in the selected directory. Please select the
          correct folder.
        </p>
      )}
    </div>
  )
}
