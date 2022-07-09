import { generateFlagURL } from '../url.js'

describe('generateFlagURL', () => {
  test('generates url for an svg flag', () => {
    const url = generateFlagURL({
      division: 1,
      divisionColors: [2, 3, 4],
      overlay: 5,
      overlayColor: 6,
      symbol: 7,
      symbolColor: 8,
    })

    expect(url).toMatchSnapshot()
  })

  test('randomizes parameters when none given', () => {
    const url = generateFlagURL()

    expect(url).toStartWith('https://flag-designer.appspot.com')
  })

  test('randomizes parameters when partially given', () => {
    const url = generateFlagURL({
      division: 1,
    })

    expect(url).toMatch(/d=1/)
  })
})
