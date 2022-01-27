import React from 'react';
import ButtonsExplore from '../components/ButtonsExplore';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

export default function ExportarComidas() {
  return (
    <div>
      <Header />
      <Navbar />
      <ButtonsExplore type="comidas" />
    </div>
  );
}
