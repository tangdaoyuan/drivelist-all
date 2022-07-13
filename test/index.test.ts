import { expect, it } from 'vitest'
import { list } from '@'

it('runs', async() => {
  const drivers = await list()
  expect(drivers).toMatchInlineSnapshot()
})
