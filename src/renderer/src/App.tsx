import { Routes, Route } from 'react-router'
import LobbyStart from './LobbyStart'
import { Settings } from './components/Settings'

function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Settings />} />
      <Route path="/lobby" element={<LobbyStart />} />
    </Routes>
  )
}

export default App
