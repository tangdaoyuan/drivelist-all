import os from 'os'
import { list as wList } from '@suger-tdy/drivelist-windows'
import { list as oList } from '@suger-tdy/drivelist-osx'
import { list as lList } from '@suger-tdy/drivelist-linux'

export async function list() {
  const plat = os.platform()

  if (plat === 'linux')
    return await lList()

  else if (plat === 'win32')
    return await wList()

  else if (plat === 'darwin')
    return await oList()

  throw new Error(`Unsupported platform: ${plat}`)
}
