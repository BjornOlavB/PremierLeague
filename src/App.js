import React from 'react';
import './App.css';
import useFetchStandings from './FetchData';
import Table from './components/Table';
import Header from './components/Header';
import Settings from './components/Settings';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const App = () => {
  const { standings, loading, error } = useFetchStandings();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Router>
        <Header />
        <Routes>
            <Route exact path="/" element={<Table standings={standings} />} />
            <Route exact path="/settings" element={<Settings />} />
    </Routes>
    </Router>
    </div>
  );
};

export default App;
