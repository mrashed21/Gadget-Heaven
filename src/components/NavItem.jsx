import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const NavItem = ({ route, handleNavLink }) => {
  return (
    <NavLink
      to={route.path}
      className={({ isActive }) =>
        isActive
          ? "text-red-400 bg-[#09080F99] rounded-xl px-3 py-1"
          : "text-white bg-[#09080F99] rounded-xl px-3 py-1"
      }
      onClick={handleNavLink}
    >
      {route.name}
    </NavLink>
  );
};
NavItem.propTypes = {
  route: PropTypes.object,
  handleNavLink: PropTypes.func,
};
export default NavItem;
