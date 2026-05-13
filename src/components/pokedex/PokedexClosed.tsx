import styles from './pokedex.module.css'

export function PokedexClosed() {
  return (
    <div className={styles.closedCenter}>
      <p className={styles.closedRegion}>Kalos</p>
      <p className={styles.closedWordmark}>Pokédex</p>
      <p className={styles.closedAuthor}>Test Trainer</p>
    </div>
  )
}
