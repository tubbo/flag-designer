import { generateFlagImage } from '../image.js'

describe('generateFlagImage', () => {
  test('returns image data when successful', async () => {
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

  test('throws error when failure occurs', async () => {
    await expect(generateFlagImage({ division: 99999 })).rejects.toThrowError()
  })
})
