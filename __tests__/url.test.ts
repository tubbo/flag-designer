import { generateFlagURL } from '../url.js'

test('generateFlagURL', () => {
  const base = 'https://flag-designer.appspot.com/gwtflags/SvgFileService'

  expect(generateFlagURL()).toStartWith(base)
})
