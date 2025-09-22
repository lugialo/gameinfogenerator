import { ClientSettings } from './ClientSettings'
import { ChronobreakSettings } from './ChronobreakSettings'

export function Settings(): React.JSX.Element {
  return (
    <div>
      <h1>Settings</h1>
      <ClientSettings />
      <ChronobreakSettings />
    </div>
  )
}
