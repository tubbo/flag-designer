import { generateFlagURL, type FlagParams } from './url.js'

/**
 * Generate a flag SVG from a given set of parameters.
 */
export async function generateFlagImage(params?: Partial<FlagParams>) {
  const url = generateFlagURL(params)
  const response = await fetch(url)

  if (!response.ok) {
    const message = await response.text()

    throw new Error(message)
  }

  return response.blob()
}
