import fs from 'fs'
import path from 'path'
import { Footer, Main } from '../utils/types'

const directory = path.join(process.cwd(), 'src/data')

export function getFooterData(): Footer {
  const fullPath = path.join(directory, 'footer.json')
  const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8')) as Footer
  let data: Footer
  data = { ...fileContents }
  return { ...data }
}

export function getMainData(): Main {
  const fullPath = path.join(directory, 'main.json')
  const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8')) as Main
  let data: Main
  data = { ...fileContents }
  return { ...data }
}
