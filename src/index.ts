import os from 'os'
import type { DriveListModule } from './types'

const PLATFORM = {
  linux: 'linux',
  win32: 'windows',
  darwin: 'osx',
} as Record<NodeJS.Platform, string>

const plat = os.platform()

let drivelist: DriveListModule

async function importModule() {
  const m = await import(`@suger-tdy/drivelist-${PLATFORM[plat]}`)
  drivelist = m
}

export async function list() {
  const plat = os.platform()

  if (!drivelist)
    await importModule()

  if (plat === 'linux')
    return await drivelist.list()

  else if (plat === 'win32')
    return await drivelist.list()

  else if (plat === 'darwin')
    return await drivelist.list()

  throw new Error(`Unsupported platform: ${plat}`)
}
