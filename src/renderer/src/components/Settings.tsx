// interface DirectoryInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   webkitdirectory?: boolean
// }
import React from 'react'

export function SettingsField(): React.JSX.Element {
  // const [chronobreakDirectory, setChronobreakDirectory] = useState<string | null>(null)

  const handleChronobreakDirectorySelection = (file: File | null): void => {
    console.log('Chronobreak directory selected:', file?.webkitRelativePath)
    // setChronobreakDirectory(file?.webkitRelativePath || null)
  }

  return (
    <div>
      <h2>Select the Chronobreak Game Server File (where GameServerConsole.exe stands)</h2>
      <button onClick={handlePickDirectory}>Select folder</button>
    </div>
  )
}
