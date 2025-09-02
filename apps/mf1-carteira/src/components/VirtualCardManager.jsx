// src/components/VirtualCardManager.jsx
import React from 'react';

const VirtualCardManager = ({ cardInfo, cashback }) => {
  return (
    <div style={styles.container}>
      <h1>Cartão Virtual</h1>
      <div style={styles.card}>
        <p><strong>Número:</strong> {cardInfo.number}</p>
        <p><strong>Validade:</strong> {cardInfo.expiry}</p>
        <p><strong>Status:</strong> {cardInfo.status}</p>
      </div>
      <div style={styles.cashback}>
        <h2>Cashback acumulado</h2>
        <p>R$ {cashback.toFixed(2)}</p>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '2rem', fontFamily: 'sans-serif' },
  card: {
    background: '#e0f7fa',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  cashback: {
    background: '#fff3e0',
    padding: '1rem',
    borderRadius: '8px',
  },
};

export default VirtualCardManager;
