import * as child_process from 'child_process'
import * as fs from 'fs'
import * as path from 'path'

export function startServer(serverDirectory: string): void {
  const { spawn } = child_process
  let executableNotFound = false

  console.log('Starting server in directory:', serverDirectory)

  if (!fs.existsSync(serverDirectory)) {
    console.error('Directory not found:', serverDirectory)
    return
  }

  const executablePath = path.join(serverDirectory, 'GameServerConsole.exe')
  if (!fs.existsSync(executablePath)) {
    console.error('Executable not found:', executablePath)
    global.executableNotFound = true
    return
  }

  const serverProcess = spawn('GameServerConsole.exe', [], {
    cwd: serverDirectory,
    shell: true,
    detached: true,
    stdio: 'ignore'
  })

  serverProcess.on('error', (err) => {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
      console.error('File not found or cannot be executed:', executablePath)
    } else {
      console.error('Failed to start server:', err)
    }
  })

  serverProcess.on('spawn', () => {
    console.log('Server started successfully')
  })
}
