import { useState } from "react";
import "./NavBarStyle.css";
import { Link } from "react-router-dom";

function NavBar() {
    let items = [
      {
        id: 1,
        value: "Home",
        href: "/",
      },
      {
        id: 2,
        value: "About",
        href: "/about",
      },
      {
        id: 3,
        value: "Timeline",
        href: "/timeline",
      },
      {
        id: 4,
        value: "Contact",
        href: "/contact",
      },
    ];

  let [currentIndex, setCurrentIndex] = useState(0);

  let setClassName = (index,item)=> {
    let path = window.location.pathname;
    if(index===currentIndex && path===item.href){
      return "active";
    }
    return "";
  }
  return (
    <div>
      <nav>
        <div className="logo">
          <Link
            to="/"
            onClick={() => {
              setClassName(1,{href:"/"});
            }}
            style={{color:"white", textDecoration:"none"}}
          >
            Portfolio
          </Link>
        </div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-button">
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          {items.map((item, index) => (
            <li key={item.id}>
              <Link
                to={item.href}
                onClick={(e) => {
                  setCurrentIndex(index);
                  setClassName(index,item);
                }}
                className={setClassName(index,item)}
              >
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
