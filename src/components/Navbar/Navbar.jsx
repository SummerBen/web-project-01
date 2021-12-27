import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return <nav className={s.nav}>
    <div>
      <NavLink to='/profile' className={Navbar => Navbar.isActive ? s.active : s.item}>Profile</NavLink>
    </div>
    <div>
      <NavLink to='/messages' className={Navbar => Navbar.isActive ? s.active : s.item}>Messages</NavLink>
    </div>
    <div>
      <NavLink to='/feed' className={Navbar => Navbar.isActive ? s.active : s.item}>News</NavLink>
    </div>
    <div>
      <NavLink to='/music' className={Navbar => Navbar.isActive ? s.active : s.item}>Music</NavLink>
    </div>
    <div>
      <NavLink to='/settings' className={Navbar => Navbar.isActive ? s.active : s.item}>Settings</NavLink>
    </div>
  </nav>
}

export default Navbar;