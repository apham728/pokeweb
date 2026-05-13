import styles from './pokedex.module.css'

export function PokedexClosed() {
  return (
    <div className={styles.closedCenter}>
      <p className={styles.closedRegion}>Kalos</p>
      <p className={styles.closedWordmark}>Pokedex</p>
      <p className={styles.closedAuthor}>Version 1</p>
    </div>
  )
}
