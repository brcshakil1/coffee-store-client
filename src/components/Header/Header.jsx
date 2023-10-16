import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-center items-center gap-5 py-5">
          <li>
            <NavLink to="/signIn">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/signUp">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
