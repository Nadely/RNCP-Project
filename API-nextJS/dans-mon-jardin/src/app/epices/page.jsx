import React from 'react';
import styles from './page.module.css';

const EpicesPage = () => {
  return (
    <div className={styles['carousel-inner']}>
      <h1>Epices</h1>
      <img src="/images/epices.jpg" alt="Epices"/>

      <div className={styles['full-card']}>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/epices/Thym.jpg" className="card-img-top" alt="Thym" />
          <div className="card-body">
            <p className="card-text">Thym</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/epices/Laurier.jpg" className="card-img-top" alt="Laurier" />
          <div className="card-body">
            <p className="card-text">Laurier</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/epices/Basilic.jpg" className="card-img-top" alt="Basilic-vert" />
          <div className="card-body">
            <p className="card-text">Basilic vert</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/epices/Origan.jpeg" className="card-img-top" alt="Origan" />
          <div className="card-body">
            <p className="card-text">Origan</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/epices/Persil-plat.jpg" className="card-img-top" alt="Persil-plat" />
          <div className="card-body">
            <p className="card-text">Persil plat</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/epices/Aneth.jpg" className="card-img-top" alt="Aneth" />
          <div className="card-body">
            <p className="card-text">Aneth</p>
          </div>
        </div>

      </div>

      <div className={styles['Return']}>
        <a href="/">Retour à la page d'accueil</a>
      </div>
    </div>
  );
};

export default EpicesPage;
