import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Playground from './Playground.jsx';
import ComingSoon from './components/shared/ComingSoon/ComingSoon.jsx';
import EventsPage from './components/EventsPage/EventsPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
