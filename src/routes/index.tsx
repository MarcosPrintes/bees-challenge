import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { State } from '@/store';

import { Login } from '@/pages/Login';
import { Breweries } from '@/pages/Breweries';

interface IRouteProps {
  component: React.ComponentType;
  path?: string;
  isAuth: boolean;
}

const PrivateLoginRoute = ({
  component: RouteComponent,
  isAuth,
}: IRouteProps) =>
  isAuth ? <RouteComponent /> : <Navigate to="/breweries" replace />;

const PrivateBreweriesRoute = ({
  component: RouteComponent,
  isAuth,
}: IRouteProps) => (isAuth ? <RouteComponent /> : <Navigate to="/" replace />);

export function AppRoutes() {
  const { name } = useSelector((state: State) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          caseSensitive={true}
          element={<PrivateLoginRoute isAuth={name === ''} component={Login} />}
        />
        <Route
          path="/breweries"
          element={
            <PrivateBreweriesRoute isAuth={name !== ''} component={Breweries} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
