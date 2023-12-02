import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';
import CompanyPage from './pages/CompanyPage';
import companies from './companies.json';
import technologies from './technologies.json';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [comp, setComp] = useState(companies);
  const [tech, setTech] = useState(technologies);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage comp={comp} />} />
        <Route
          path='/company/:companySlug'
          element={<CompanyPage comp={comp} />}
        />
        <Route path='/tech/:slug' element={<TechnologyPage tech={tech} />} />
      </Routes>
    </>
  );
}

export default App;
