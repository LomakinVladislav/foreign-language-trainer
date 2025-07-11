import React, { useState } from 'react';
import './App.module.css';
import { App, ConfigProvider } from 'antd';
import LayoutComponent from './components/Layout/Layout';
import { lightThemeConfig, darkThemeConfig } from './styles/theme';
import DeckContent from './components/DeckContent/DeckContent';
import Main from './pages/Main/Main'
import Authorization from './pages/Authorization/Authorization'
import ExpiredSession from './components/ExpiredSession/ExpiredSession'
import DeckCreation from './pages/DeckCreation/DeckCreation'
import Favorites from './pages/Favorites/Favorites'
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';

const AppComponent: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'true'; 
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', (!isDarkMode).toString());
  };
  return (
    <Router>
      <ConfigProvider theme={isDarkMode ? darkThemeConfig : lightThemeConfig}>
        <App>
        <Routes>
            <Route path="/auth" element={<Authorization isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>} />
            <Route element={(
              <LayoutComponent isDarkMode={isDarkMode} toggleTheme={toggleTheme}>
                <Outlet /> 
              </LayoutComponent>
            )}>
              <Route path="/main" element={<Main />} />
              <Route path="/decks/:deckId/content" element={<DeckContent />} />
              <Route path="*" element={<Navigate to="/main" />} />
              <Route path="/expired_session" element={<ExpiredSession />} />
              <Route path="/deck_creation" element={<DeckCreation />} />
              <Route path="/favorites" element={<Favorites />} />
              {/* <Route path="/profile" element={} /> */}
              {/* <Route path="/settings" element={} /> */}
              {/* <Route path="/search" element={} /> */}
              {/* <Route path="/library" element={} /> */}
              {/* <Route path="/newdeck" element={} /> */}
            </Route>
          </Routes>
        </App>
      </ConfigProvider>
    </Router>
  )
};

export default AppComponent;
