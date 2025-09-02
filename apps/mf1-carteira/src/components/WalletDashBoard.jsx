// src/components/WalletDashboard.jsx
import React from 'react';

const WalletDashboard = ({ stablecoinBalance, exchangeRate }) => {
  const localCurrency = (stablecoinBalance * exchangeRate).toFixed(2);

  return (
    <div style={styles.container}>
      <h1>Minha Carteira</h1>
      <div style={styles.card}>
        <h2>Saldo em Stablecoin</h2>
        <p>{stablecoinBalance} USDC</p>
      </div>
      <div style={styles.card}>
        <h2>Equivalente em Real</h2>
        <p>R$ {localCurrency}</p>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '2rem', fontFamily: 'sans-serif' },
  card: {
    background: '#f0f0f0',
    padding: '1rem',
    margin: '1rem 0',
    borderRadius: '8px',
  },
};

export default WalletDashboard;
