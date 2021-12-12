import React from 'react';
import { HomePage } from '@pages/HomePage';
import { Navbar } from '@components/Navbar';

export function App() {
  return (
    <>
      <Navbar />

      <main className='container-lg mt-5'>
        <HomePage />
      </main>
    </>
  );
}