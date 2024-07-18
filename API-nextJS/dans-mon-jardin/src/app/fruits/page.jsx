import React from 'react';
import styles from './page.module.css';

const FruitsPage = () => {
  return (
    <div className={styles['carousel-inner']}>
      <h1>Fruits</h1>
      <img src="/images/fruits.jpg" alt="Fruits"/>

      <div className={styles['full-card']}>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/fruits/Pommes.jpg" className="card-img-top" alt="Pommes" />
          <div className="card-body">
            <p className="card-text">Pommes</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/fruits/Fraises.jpg" className="card-img-top" alt="Fraises" />
          <div className="card-body">
            <p className="card-text">Fraises</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/fruits/Poires.jpg" className="card-img-top" alt="Poires" />
          <div className="card-body">
            <p className="card-text">Poires</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/fruits/Cerises.jpg" className="card-img-top" alt="Cerises" />
          <div className="card-body">
            <p className="card-text">Cerises</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/fruits/Prunes.jpeg" className="card-img-top" alt="Prunes" />
          <div className="card-body">
            <p className="card-text">Prunes</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/fruits/Pêches.jpeg" className="card-img-top" alt="Pêches" />
          <div className="card-body">
            <p className="card-text">Pêches</p>
          </div>
        </div>

      </div>

      <div className={styles['Return']}>
        <a href="/">Retour à la page d'accueil</a>
      </div>
    </div>
  );
};

export default FruitsPage;
