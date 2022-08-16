import { Link , NavLink } from "react-router-dom"


const Nav = ({ type }) => {
  if (type == "header") {
    return (
      <nav>
        <NavLink to="/categoria/electronics">electronics</NavLink>
        <NavLink to="/categoria/jewelery">jewelery</NavLink>
        <NavLink to="/cart">
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </NavLink>
      </nav>
    )
  } else {
    return (
      <nav>
        <Link to="#">link-footer</Link>
        <Link to="#">link-footer</Link>
        <Link to="#">link-footer</Link>
      </nav>
    )
  }

}

export default Nav