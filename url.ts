function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Parameters that control flag generation.
 */
export interface FlagParams {
  d?: string
  c1?: string
  c2?: string
  c3?: string
  o?: string
  c4?: string
  s?: string
  c5?: string
}

/**
 * Generate the URL to a flag SVG from a given set of parameters.
 */
export function generateFlagURL(options?: FlagParams) {
  const url = new URL('https://flag-designer.appspot.com')
  const params = new URLSearchParams({
    d: randomNumber(0, 12).toString(),
    c1: randomNumber(0, 12).toString(),
    c2: randomNumber(0, 12).toString(),
    c3: randomNumber(0, 12).toString(),
    o: randomNumber(0, 12).toString(),
    c4: randomNumber(0, 12).toString(),
    s: randomNumber(0, 12).toString(),
    c5: randomNumber(0, 12).toString(),
    ...options,
  })

  url.pathname = '/gwtflags/SvgFileService'
  url.search = params.toString()

  return url.toString()
}
