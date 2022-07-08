import { generateFlagImage } from '../image.js'

test('generateFlagImage', async () => {
  const image = await generateFlagImage()

  expect(image.type).toEqual('image/svg+xml;charset=iso-8859-1')
})
