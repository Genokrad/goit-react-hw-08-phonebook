import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.name);

  return (
    <div>
      <p>Hello, {userName}</p>
      <button
        className="logoutBtn"
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
