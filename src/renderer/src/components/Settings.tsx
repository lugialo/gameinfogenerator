// interface DirectoryInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   webkitdirectory?: boolean
// }
import React from 'react'

export function SettingsField(): React.JSX.Element {
  const handlePickDirectory = async (): Promise<void> => {
    const result = await window.electron.ipcRenderer.invoke('pick-chronobreak-directory')
    if (result && !result.canceled) {
      window.electron.ipcRenderer.send('chronobreakDirectorySelected', result.filePaths[0])
    }
  }

  return (
    <div>
      <h2>Select the Chronobreak Game Server File (where GameServerConsole.exe stands)</h2>
      <button onClick={handlePickDirectory}>Select</button>
    </div>
  )
}
