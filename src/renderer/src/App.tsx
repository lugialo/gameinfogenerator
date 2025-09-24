import { Routes, Route } from 'react-router'
import LobbyStart from './LobbyStart'
import { Settings } from './components/Settings'

function App(): React.JSX.Element {
  return (
    <div className="bg-[hsla(205,46%,10%,1)] min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Settings />} />
        <Route path="/lobby" element={<LobbyStart />} />
      </Routes>
    </div>
  )
}

export default App
