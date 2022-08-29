import React from 'react';

import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { Settings } from 'pages/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router: React.VFC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
