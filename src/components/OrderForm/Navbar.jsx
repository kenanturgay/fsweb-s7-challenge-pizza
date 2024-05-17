import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <header className='header'>
      <section className='navbar-header'>
        <h1>Teknolojik Yemekler</h1>
      </section>
      <section className='navbar-links'> {/* yourum: Ekledim */}
        <nav className="navbar">
          <a href="/">Anasayfa</a>
          <a href="/">Seçenekler</a>
          <a href="/">Sipariş Oluştur</a>
        </nav>
      </section>
    </header>
  );
}

