import { PokedexClosed } from './PokedexClosed'
import styles from '../styles/pokedex.module.css'

export function PokedexShell() {
  return (
    <section className={styles.stage}>
      <article className={styles.pokedex} aria-label="Closed Pokedex device">
        <div className={styles.topPlate}>
          <span aria-hidden="true" />
        </div>

        <div className={styles.middleBand}>
          <PokedexClosed />
        </div>

        <div className={styles.bottomPlate}>
          <span aria-hidden="true" />
        </div>
      </article>
    </section>
  )
}
