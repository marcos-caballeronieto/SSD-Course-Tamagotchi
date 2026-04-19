import React, { useState } from 'react';
import { usePetStore } from '../store/usePetStore';
import styles from './NamingScreen.module.css';

export function NamingScreen() {
  const [inputValue, setInputValue] = useState('');
  const setName = usePetStore((state) => state.setName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = inputValue.trim();
    if (cleanName.length > 0) {
      setName(cleanName);
    }
  };

  const isInvalid = inputValue.trim().length === 0;

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.subtitle}>A new companion is waiting for you.</p>
      </div>
      
      <div style={{ fontSize: '5rem', animation: 'bounce 2s infinite ease-in-out' }}>
        🥚
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          placeholder="Name your pet..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          maxLength={15}
          autoFocus
        />
        <button 
          type="submit" 
          className={styles.button}
          disabled={isInvalid}
        >
          Start Journey
        </button>
      </form>
    </div>
  );
}
