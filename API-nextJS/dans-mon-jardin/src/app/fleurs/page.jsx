import React from 'react';
import styles from './page.module.css';

const FleursPage = () => {
  return (
    <div className={styles['carousel-inner']}>
      <h1>Fleurs</h1>
      <img src="/images/fleurs.jpg" alt="Fleurs"/>

      <div className={styles['full-card']}>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/fleurs/Roses.jpg" className="card-img-top" alt="Roses" />
          <div className="card-body">
            <p className="card-text">Roses</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/fleurs/Lys.jpg" className="card-img-top" alt="Lys" />
          <div className="card-body">
            <p className="card-text">Lys</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/fleurs/Agapanthes.jpg" className="card-img-top" alt="Agapanthes" />
          <div className="card-body">
            <p className="card-text">Agapanthes</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/fleurs/Pensees.jpg" className="card-img-top" alt="Pensées" />
          <div className="card-body">
            <p className="card-text">Pensées</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/fleurs/Iris.jpg" className="card-img-top" alt="Iris" />
          <div className="card-body">
            <p className="card-text">Iris</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/fleurs/Glaïeuls.jpg" className="card-img-top" alt="Glaïeuls" />
          <div className="card-body">
            <p className="card-text">Glaïeuls</p>
          </div>
        </div>

      </div>

      <div className={styles['Return']}>
        <a href="/">Retour à la page d'accueil</a>
      </div>
    </div>
  );
};

export default FleursPage;
