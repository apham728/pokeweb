import { PokedexScreen } from './PokedexScreen'
import styles from './pokedex.module.css'

type PokedexOpenProps = {
  isVisible: boolean
}

export function PokedexOpen({ isVisible }: PokedexOpenProps) {
  return (
    <div className={`${styles.openArea} ${isVisible ? styles.openAreaVisible : ''}`}>
      <div className={styles.topControls} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <PokedexScreen />
      <div className={styles.bottomControls} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}
