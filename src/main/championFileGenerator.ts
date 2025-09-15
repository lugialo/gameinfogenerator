import * as fs from 'fs'
import * as path from 'path'
import { gameInfoTemplate } from './template/GameInfo'

export function championFileGenerator(championName: string, serverDirectory: string): void {
  const fileContent = gameInfoTemplate(championName)

  const filePath = path.join(serverDirectory + '/settings/', 'GameInfo.json')

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error('Error writing GameInfo.json file:', err)
    } else {
      console.log('GameInfo.json written successfully to', filePath)
    }
  })
}
