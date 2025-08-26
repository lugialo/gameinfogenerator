import { Routes, Route } from 'react-router'
import { SettingsField } from './components/Settings'
import LobbyStart from './LobbyStart'

function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<SettingsField />} />
      <Route path="/lobby" element={<LobbyStart />} />
    </Routes>
  )
}

export default App
