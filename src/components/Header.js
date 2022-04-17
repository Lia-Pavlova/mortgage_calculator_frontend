import { Link, NavLink } from 'react-router-dom'
import { logout } from '../service/authorization.js'
import logo from '../assets/logo.png'
import s from './components.module.css'

const Header = ({ setIsLoggedIn }) => {
  const isLoggedIn = JSON.parse(localStorage.getItem('user'))
  const logoutUser = () => {
    logout().then(() => setIsLoggedIn(false))
  }
  return (
    <div className={s.header}>
      <div className={s.content}>
        <div className={s.wrapper}>
          <Link className={s.logo_img} to="/">
            <img src={logo} alt="logo" className={s.logo} />
          </Link>
          <p className={s.logo}>Mortgage Calculator</p>

          {isLoggedIn ? (
            <>
              <ul className={s.list}>
                <li className={s.list_item}>
                  <NavLink
                    to="/banks"
                    alt="banks page"
                    className={s.link_nav}
                    activeClassName={s.active_link}
                  >
                    Banks
                  </NavLink>
                </li>
                <li className={s.list_item}>
                  <NavLink
                    to="/calculator"
                    alt="calculator page"
                    className={s.link_nav}
                    activeClassName={s.active_link}
                  >
                    Calculator
                  </NavLink>
                </li>
              </ul>
              <button className={s.btn_logout} onClick={logoutUser}>
                Logout
              </button>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
