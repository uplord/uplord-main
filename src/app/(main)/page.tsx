import styles from './page.module.scss'

export default function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles.text}>
              <h1>Website coming soon</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
