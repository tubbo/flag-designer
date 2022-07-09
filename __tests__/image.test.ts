import { generateFlagImage } from '../image.js'

test('generateFlagImage', async () => {
  const image = await generateFlagImage({
    division: 0,
    divisionColors: [1, 2, 3],
    overlay: 4,
    overlayColor: 5,
    symbol: 6,
    symbolColor: 7,
  })

  expect(image).toMatchSnapshot()
})
