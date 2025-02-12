'use client';
import { useSelector } from 'react-redux';
import HomeScreen from './home/page';
import styles from './page.module.css';

export default function Home() {
  const { isError } = useSelector((state) => state?.home);

  return (
    <main>
      {isError ? (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.errorCode}>500</div>
            <p className={styles.errorTitle}>Internal Server Error</p>
            <p className={styles.errorMessage}>We'll be back soon..</p>
          </div>
        </div>
      ) : (
        <HomeScreen />
      )}
    </main>
  );
}
