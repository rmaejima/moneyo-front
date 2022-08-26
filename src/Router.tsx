import React from 'react';

import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router: React.VFC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
