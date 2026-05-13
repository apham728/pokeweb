import { useEffect, useState } from 'react'

export type PokedexState = 'closed' | 'opening' | 'open'

const CLOSED_DELAY_MS = 1800
const OPENING_DURATION_MS = 1200

export function usePokedexIntro() {
  const [state, setState] = useState<PokedexState>('closed')

  const isClosed = state === 'closed'
  const isOpening = state === 'opening'
  const isOpen = state === 'open'

  useEffect(() => {
    const openingTimer = window.setTimeout(() => {
      setState('opening')
    }, CLOSED_DELAY_MS)

    const openTimer = window.setTimeout(() => {
      setState('open')
    }, CLOSED_DELAY_MS + OPENING_DURATION_MS)

    return () => {
      window.clearTimeout(openingTimer)
      window.clearTimeout(openTimer)
    }
  }, [])

  return { state, isClosed, isOpening, isOpen }
}
