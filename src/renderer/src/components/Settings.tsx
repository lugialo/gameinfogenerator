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
      <h2>Select the Chronobreak Game Server File</h2>
      <input
        type="file"
        // @ts-ignore: webkitdirectory is not a standard HTML attribute
        webkitdirectory="true"
        onChange={(e) => {
          const file = e.target.files?.[0] || null
          handleChronobreakDirectorySelection(file)
        }}
      />
    </div>
  )
}
