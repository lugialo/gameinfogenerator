import * as child_process from 'child_process'

export function startServer(serverDirectory: string): void {
  const { spawn } = child_process

  console.log('Starting server in directory:', serverDirectory)

  spawn('cd ' + serverDirectory + ' && start GameServerConsole.exe', {
    shell: true,
    detached: true,
    stdio: 'ignore'
  }).on('error', (err) => {
    console.error('Failed to start server:', err)
  })
}
