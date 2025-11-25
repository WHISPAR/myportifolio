// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
import LoadingScreen from './components/ui/LoadingScreen';
import Cursor from './components/ui/Cursor';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Cursor />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;