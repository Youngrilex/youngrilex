// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './components/MainPage';
import Page2 from './components/SignInSide';
import Page3 from './components/SignUp';
import Page4 from './components/Portfolio';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/Portfolio" element={<Page4 />} />
      </Routes>
    </Router>
  );
};

export default App;
