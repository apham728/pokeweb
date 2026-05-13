import { pokedexEntry, seenEntries } from '../../data/pokedexMock'
import styles from './pokedex.module.css'

export function PokedexScreen() {
  return (
    <div className={styles.screen}>
      <header className={styles.screenHeader}>
        <span>{pokedexEntry.region}</span>
        <span>{pokedexEntry.trainer}</span>
      </header>

      <section className={styles.entry}>
        <p className={styles.mainTitle}>
          {pokedexEntry.number} {pokedexEntry.name}
        </p>
        <p>{pokedexEntry.species}</p>
        <p>Type: {pokedexEntry.type}</p>
        <p>Height: {pokedexEntry.height}</p>
        <p>Weight: {pokedexEntry.weight}</p>
      </section>

      <p className={styles.flavor}>{pokedexEntry.flavor}</p>

      <footer className={styles.gridRow} aria-label="Nearby entries">
        {seenEntries.map((entryNumber) => (
          <span key={entryNumber} className={styles.gridCell}>
            {entryNumber}
          </span>
        ))}
      </footer>
    </div>
  )
}
