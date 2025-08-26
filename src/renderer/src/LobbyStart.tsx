import { ChampionSelect } from './components/ChampionSelect/ChampionSelect'

function LobbyStart(): React.JSX.Element {
  const handleStartServer = (): void => {
    window.electron.ipcRenderer.send('startServer')
    console.log('Server start request sent')
    window.electron.ipcRenderer.on('serverStarted', (message) => {
      console.log(message)
    })
  }
  return (
    <>
      <ChampionSelect></ChampionSelect>
      <div className="text-center">
        <button onClick={handleStartServer}>Iniciar</button>
      </div>
    </>
  )
}

export default LobbyStart
