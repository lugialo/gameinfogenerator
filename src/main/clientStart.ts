import { BrowserWindow } from 'electron'
import * as child_process from 'child_process'
import * as fs from 'fs'
import * as path from 'path'

export function startClient(clientDirectory: string): void {
  const { spawn } = child_process

  const mainWindow = BrowserWindow.getFocusedWindow()

  console.log('Starting client in directory:', clientDirectory)

  if (!fs.existsSync(clientDirectory)) {
    console.error('Directory not found:', clientDirectory)
    return
  }

  // Check if the executable exists in the specified directory
  // If it does not exist, send a message to the main window through webContents and return
  const executablePath = path.join(clientDirectory, 'League of Legends.exe')
  if (!fs.existsSync(executablePath)) {
    console.error('Executable not found:', executablePath)
    if (mainWindow) {
      mainWindow.webContents.send('chronobreakDirectoryValid', false)
    }
    return
  }

  // Spawn the client process
  const clientProcess = spawn(
    'start "" "League of Legends.exe" "" "" "" "127.0.0.1 5119 17BLOhi6KZsTtldTsizvHg== 1"',
    [],
    {
      cwd: clientDirectory,
      shell: true,
      detached: true,
      stdio: 'ignore'
    }
  )

  clientProcess.on('error', (err) => {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
      console.error('File not found or cannot be executed:', executablePath)
    } else {
      console.error('Failed to start client:', err)
    }
  })

  clientProcess.on('spawn', () => {
    console.log('Server started successfully')
    mainWindow?.webContents.send('chronobreakDirectoryValid', true)
  })
}
