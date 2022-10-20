import React from 'react';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Contex/AuthProvider/AuthProvider';
import { routes } from './Routs/Routs';

const App = () => {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
    </div>
  );
};

export default App;