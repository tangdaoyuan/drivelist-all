import os from 'os'
import module from 'module'
import type { DriveListModule } from './types'

const dynamicReq = module.createRequire ? module.createRequire(import.meta.url) : require

const PLATFORM = {
  linux: 'linux',
  win32: 'windows',
  darwin: 'osx',
} as Record<NodeJS.Platform, string>

const plat = os.platform()

let drivelist: DriveListModule

async function importModule() {
  const m = await dynamicReq(`@suger-tdy/drivelist-${PLATFORM[plat]}`)
  drivelist = m
}

export async function list() {
  if (!drivelist)
    await importModule()

  if (PLATFORM[plat])
    return await drivelist.list()

  throw new Error(`Unsupported platform: ${plat}`)
}
