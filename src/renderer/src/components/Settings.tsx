import { ClientSettings } from './ClientSettings'
import { ChronobreakSettings } from './ChronobreakSettings'
import { Button } from './Button'

export function Settings(): React.JSX.Element {
  return (
    <>
      <div className="flex flex-col gap-4 p-6 min-h-screen w-full">
        <h1 className="text-center font-bold text-4xl">Settings</h1>
        <ClientSettings />
        <ChronobreakSettings />
        <Button buttonLabel="Next" linkTo="/lobby" />
      </div>
    </>
  )
}
