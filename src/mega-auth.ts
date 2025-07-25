import { download } from 'megajs'
import fs from 'fs-extra'
import path from 'path'
import { useMultiFileAuthState } from './Auth'

export async function useMegaAuthState(megaLink: string, sessionID = 'default') {
  const sessionFolder = path.resolve('./sessions/' + sessionID)
  await fs.ensureDir(sessionFolder)

  await download({ url: megaLink, dest: sessionFolder, unzip: false })
  return useMultiFileAuthState(sessionFolder)
}
