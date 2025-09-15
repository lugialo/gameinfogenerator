import { ChampionSelect } from './components/ChampionSelect/ChampionSelect'
import React, { useState } from 'react'
function LobbyStart(): React.JSX.Element {
  const [championSelected, setChampionSelected] = useState<string | null>(null)

  const handleChampionSelection = (championName: string): void => {
    setChampionSelected(championName)
    console.log('Champion selected:', championName)
  }

  const handleStartServer = async (): Promise<void> => {
    if (championSelected) {
      try {
        await window.electron.ipcRenderer.invoke('setChampion', championSelected)
        const directory = await window.electron.ipcRenderer.invoke('getChronobreakDirectory')
        console.log('Champion file generated for:', championSelected, 'in directory:', directory)
      } catch (error) {
        console.error('Error generating champion file:', error)
      }
    }
    window.electron.ipcRenderer.send('startServer')
    console.log('Server start request sent')
    window.electron.ipcRenderer.on('serverStarted', (message) => {
      console.log(message)
    })
  }
  return (
    <>
      <ChampionSelect championSelected={handleChampionSelection}></ChampionSelect>
      <div className="text-center">
        <button onClick={handleStartServer}>Iniciar</button>
      </div>
    </>
  )
}

export default LobbyStart
