'use client';
import { useSyncExternalStore } from 'react';
import styles from './statusbar.module.css';

function vaasaTime() {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Helsinki',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date());
}

function subscribe(callback) {
  // Minutes only: nothing on the page needs to tick.
  const id = setInterval(callback, 10000);
  return () => clearInterval(id);
}

export default function StatusBar() {
  const time = useSyncExternalStore(subscribe, vaasaTime, () => '');

  return (
    <div className={styles.bar} aria-hidden="true">
      <div className={styles.right}>
        <span>{time} EEST</span>
      </div>
    </div>
  );
}
