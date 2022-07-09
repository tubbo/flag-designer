/**
 * Parameters that control flag generation.
 */
export interface FlagParams {
  /**
   * Type of division on the flag.
   */
  division: number

  /**
   * Shape that will be overlaid onto the flag.
   */
  overlay: number

  /**
   * Symbol on the top left corner of the flag.
   */
  symbol: number

  /**
   * Colors for the divisions of the flag.
   */
  divisionColors: number[]

  /**
   * Color of the overlay shape.
   */
  overlayColor: number

  /**
   * Color of the symbol.
   */
  symbolColor: number
}

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function convertOptionsToParams(options: FlagParams) {
  return {
    d: options.division.toString(),
    c1: options.divisionColors[0].toString(),
    c2: options.divisionColors[1].toString(),
    c3: options.divisionColors[2].toString(),
    o: options.overlay.toString(),
    c4: options.overlayColor.toString(),
    s: options.symbol.toString(),
    c5: options.symbolColor.toString(),
  }
}

/**
 * Generate the URL to a flag SVG from a given set of parameters.
 */
export function generateFlagURL(options?: Partial<FlagParams>) {
  const url = new URL('https://flag-designer.appspot.com')
  const defaults: FlagParams = {
    division: randomNumber(1, 12),
    overlay: randomNumber(1, 12),
    symbol: randomNumber(1, 24),

    symbolColor: randomNumber(1, 8),
    overlayColor: randomNumber(1, 8),
    divisionColors: [
      randomNumber(1, 8),
      randomNumber(1, 8),
      randomNumber(1, 8),
    ],
  }
  const params = new URLSearchParams(
    convertOptionsToParams({ ...defaults, ...options })
  )

  url.pathname = '/gwtflags/SvgFileService'
  url.search = params.toString()

  return url.toString()
}
