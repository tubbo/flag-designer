import fetch from 'cross-fetch'
import { generateFlagURL, type FlagParams } from './url.js'

/**
 * Generate a flag SVG from a given set of parameters.
 */
export async function generateFlagImage(params?: FlagParams) {
  const url = generateFlagURL(params)
  const response = await fetch(url)

  if (!response.ok) throw new Error(await response.text())

  return response.blob()
}
