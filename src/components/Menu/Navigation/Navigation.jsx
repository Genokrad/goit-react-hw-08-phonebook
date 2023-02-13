import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <nav className="navigation">
      <NavLink className="navLink" to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className="navLink" to="/phonebook">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
