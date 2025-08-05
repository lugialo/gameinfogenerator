import { BrowserWindow } from 'electron'
import * as child_process from 'child_process'
import * as fs from 'fs'
import * as path from 'path'

export function startServer(serverDirectory: string): void {
  const { spawn } = child_process

  const mainWindow = BrowserWindow.getFocusedWindow()

  console.log('Starting server in directory:', serverDirectory)

  if (!fs.existsSync(serverDirectory)) {
    console.error('Directory not found:', serverDirectory)
    return
  }

  // Check if the executable exists in the specified directory
  // If it does not exist, send a message to the main window through webContents and return
  const executablePath = path.join(serverDirectory, 'GameServerConsole.exe')
  if (!fs.existsSync(executablePath)) {
    console.error('Executable not found:', executablePath)
    if (mainWindow) {
      mainWindow.webContents.send('chronobreakDirectoryValid', false)
    }
    return
  }

  // Spawn the server process
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
    mainWindow?.webContents.send('chronobreakDirectoryValid', true)
  })
}
