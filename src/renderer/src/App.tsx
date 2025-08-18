import { ChampionSelect } from './components/ChampionSelect/ChampionSelect'
import { SettingsField } from './components/Settings'

function App(): React.JSX.Element {
  const handleStartServer = (): void => {
    window.electron.ipcRenderer.send('startServer')
    console.log('Server start request sent')
    window.electron.ipcRenderer.on('serverStarted', (message) => {
      console.log(message)
    })
  }
  return (
    <>
      <SettingsField></SettingsField>
      <ChampionSelect></ChampionSelect>
      <button onClick={handleStartServer}>Iniciar</button>
    </>
  )
}

export default App
