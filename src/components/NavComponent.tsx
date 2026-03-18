import React from "react";
import "../styles/NavComponentStyle.scss";
import avatarImg from "../assets/account.png"

function NavComponent() {
  const [isLogin, setIsLogin] = React.useState<boolean>(false);

  return (
    <nav className="navbar_main_container">
      <div className="navbar_title">что посмотреть?</div>
      {isLogin ? (
        <div className="navbar_avatarImg_container">
            <img src={avatarImg} alt="avatarImage" width={40} height={40}/>
        </div>
      ) : (
        <div className="navbar_buttons_container">
          <button>Зарегистрироваться</button>
          <button>Войти</button>
        </div>
      )}
    </nav>
  );
}

export default NavComponent;
