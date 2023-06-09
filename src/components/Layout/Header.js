import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.nav}>
          <Link to="/home">HOME</Link>
          <Link to="/">STORE</Link>
          <Link to="/about">ABOUT</Link>
        </div>
        <HeaderCartButton
          className={classes.cart}
          showCart={props.showCartHandler}
        />
      </header>
    </>
  );
};

export default Header;
