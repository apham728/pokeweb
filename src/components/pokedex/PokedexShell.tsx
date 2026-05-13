import { usePokedexIntro } from '../../hooks/usePokedexIntro'
import { PokedexClosed } from './PokedexClosed'
import { PokedexOpen } from './PokedexOpen'
import styles from './pokedex.module.css'

export function PokedexShell() {
  const { state, isOpen } = usePokedexIntro()

  return (
    <section className={styles.stage}>
      <article className={`${styles.pokedex} ${styles[state]}`} aria-label="Pokedex device">
        <div className={styles.topPlate} />

        <div className={styles.middleBand}>
          <PokedexClosed />
        </div>

        <PokedexOpen isVisible={isOpen} />

        <div className={styles.bottomPlate} />
      </article>
    </section>
  )
}
