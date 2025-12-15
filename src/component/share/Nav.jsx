import logo from "../../assets/Logo_(1).png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="w-25 mt-2 mainNav d-flex">
        <Link to="/" className="ms-5">
          <img src={logo} alt="logo" />
        </Link>
        <div className="d-flex gap-4 align-items-end routs-nav">
          <Link
            to="/"
            className="text-decoration-none text-dark fs-5 fw-medium border-bottom border-danger text-nav"
          >
            Home
          </Link>
          <Link
            to="/exercises"
            className="text-decoration-none text-dark fs-5 fw-medium border-bottom border-danger text-nav"
          >
            Exercises
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
