import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div className="navigation">
      <NavLink className="authLink" to="/register">
        Register
      </NavLink>
      <NavLink className="authLink" to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
