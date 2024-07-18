import React from 'react';
import Link from 'next/link';
import LegumesPage from './legumes/page';
import FruitsPage from './fruits/page';
import EpicesPage from './epices/page';
import FleursPage from './fleurs/page';

const Home = () => {
  return (
    <div>
      <div className='banderole'>
      <img src='/images/banderole.jpg' alt="Dans mon jardin banderole" />
      </div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item">
            <img src="/images/légumes.jpeg" className="d-block w-100" alt="Légumes" />
            <Link href="/legumes">Légumes</Link>
          </div>
          <div className="carousel-item">
            <img src="/images/fruits.jpg" className="d-block w-100" alt="Fruits" />
            <Link href="/fruits">Fruits</Link>
          </div>
          <div className="carousel-item">
            <img src="/images/epices.jpg" className="d-block w-100" alt="Epices" />
            <Link href="/epices">Epices</Link>
          </div>
          <div className="carousel-item">
            <img src="/images/fleurs.jpg" className="d-block w-100" alt="Fleurs" />
            <Link href="/fleurs">Fleurs</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
