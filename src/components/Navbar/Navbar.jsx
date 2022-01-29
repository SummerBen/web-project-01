import { NavLink } from 'react-router-dom';
import FriendsBar from './FriendsBar/FriendsBar';
import s from './Navbar.module.css';

const Navbar = (props) => {

  let friendsElements = props.state.friends.map(f => <FriendsBar name={f.name} id={f.id} avatar={f.avatar} />)

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
    <div className={s.friendsBar}>
      <div className={s.friendsBarName}>Friends</div>
      {friendsElements}
    </div>
  </nav>
}

export default Navbar;