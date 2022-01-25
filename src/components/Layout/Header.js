import React, { useContext } from "react";

import HeaderCartButton from "./HeaderCartButton";
import Button from "../UI/Button";

import classes from "./Header.module.css";

import AuthContext from "../../store/auth-context";

import mealsImage from "../../asset/meals.jpg";

const Header = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactCart</h1>
        {authCtx.isLoggedIn && (
          <div>
            <HeaderCartButton onClick={props.onShowCart} />
            <Button onClick={authCtx.onLogout}>登出</Button>
          </div>
        )}
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="" />
      </div>
    </React.Fragment>
  );
};

export default Header;
