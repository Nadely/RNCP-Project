import React from 'react';
import styles from './page.module.css';

const LegumesPage = () => {
  return (
    <div className={styles['carousel-inner']}>
      <h1>Légumes</h1>
      <img src="/images/légumes.jpeg" alt="Légumes"/>

      <div className={styles['full-card']}>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/legumes/Tomates.jpg" className="card-img-top" alt="Tomates" />
          <div className="card-body">
            <p className="card-text">Tomates</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/legumes/Poireaux.jpeg" className="card-img-top" alt="Poireaux" />
          <div className="card-body">
            <p className="card-text">Poireaux</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/legumes/Oignon-rouge.jpg" className="card-img-top" alt="Oignons-rouge" />
          <div className="card-body">
            <p className="card-text">Oignons rouge</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/legumes/Choux.jpg" className="card-img-top" alt="Choux" />
          <div className="card-body">
            <p className="card-text">Choux vert</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/legumes/Oignons.jpg" className="card-img-top" alt="Oignons" />
          <div className="card-body">
            <p className="card-text">Oignons</p>
          </div>
        </div>

        <div className={styles['card']} style={{ width: '18rem' }}>
          <img src="/images/legumes/Pommes-de-terre.jpg" className="card-img-top" alt="Pommes-de-terre" />
          <div className="card-body">
            <p className="card-text">Pommes de terre</p>
          </div>
        </div>

      </div>

      <div className={styles['Return']}>
        <a href="/">Retour à la page d'accueil</a>
      </div>
    </div>
  );
};

export default LegumesPage;
