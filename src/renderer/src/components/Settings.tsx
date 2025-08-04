// interface DirectoryInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   webkitdirectory?: boolean
// }
import React, { useState } from 'react'

export function SettingsField(): React.JSX.Element {
  const [directory, setDirectory] = useState<string>('')

  const handlePickDirectory = async (): Promise<void> => {
    const result = await window.electron.ipcRenderer.invoke('pick-chronobreak-directory')
    if (result && !result.canceled) {
      window.electron.ipcRenderer.send('chronobreakDirectorySelected', result.filePaths[0])
    }
    setDirectory(result.filePaths[0] || '')

  }

  return (
    <div>
      <h2>Select the Chronobreak Game Server File (where GameServerConsole.exe stands)</h2>
      <h3>Current Directory: {directory}</h3>
      <button onClick={handlePickDirectory}>Select</button>
    </div>
  )
}
