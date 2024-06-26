import headerLogo from '../../img/header-logo.png';
import { Link, NavLink } from 'react-router-dom';
import SearchWidget from '../SearchWidget/SearchWidget';
import { useAppSelector } from '../../redux/redux-hook';

const Header = () => {
  const { cards } = useAppSelector(state => state.cart);

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              <img src={headerLogo} alt="Bosa Noga" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Главная
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/catalog">
                    Каталог
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    О магазине
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contacts">
                    Контакты
                  </NavLink>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <SearchWidget />

                  <Link
                    to={'/cart'}
                    className="header-controls-pic header-controls-cart"
                  >
                    {cards.length !== 0 && (
                      <div className="header-controls-cart-full">
                        {cards.length}
                      </div>
                    )}
                    <div className="header-controls-cart-menu"></div>
                  </Link>
                </div>
                <form
                  data-id="search-form"
                  className="header-controls-search-form form-inline invisible"
                >
                  <input className="form-control" placeholder="Поиск" />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
