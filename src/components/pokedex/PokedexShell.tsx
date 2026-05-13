import { PokedexClosed } from './PokedexClosed'
import styles from './pokedex.module.css'

export function PokedexShell() {
  return (
    <section className={styles.stage}>
      <article className={styles.pokedex} aria-label="Closed Pokedex device">
        <div className={styles.topPlate} />

        <div className={styles.middleBand}>
          <PokedexClosed />
        </div>

        <div className={styles.bottomPlate} />
      </article>
    </section>
  )
}
