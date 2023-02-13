import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader';
import Navigation from '../Menu/Navigation';
import UserMenu from '../Menu/UserMenu';
import AuthNav from '../Menu/AuthNav';
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <div>
      <header className="header">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
