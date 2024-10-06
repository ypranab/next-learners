import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import userPic from "../../assests/user.png";
import logo from "../../assests/logo.ico";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return <div className="text-2xl text-red-600">Loading....</div>;
  }

  const navLink = (
    <>
      <li>
        <Link to={`${ROUTES.HOME}`}>Home</Link>
      </li>
      <li>
        <Link to={`${ROUTES.COURSES}`}>Products</Link>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate(`/login`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="navbar bg-zinc-200 mb-4 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <Link to="/">
          <img className="w-8" src={logo} alt="" />
        </Link>
        <Link to={`${ROUTES.HOME}`} className="btn btn-ghost text-xl">
          Next Learners
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {user && user.displayName}
        {user &&
          (user?.photoURL ? (
            <div className="w-8">
              <img className="rounded-full" alt="User" src={user?.photoURL} />
            </div>
          ) : (
            <div className="w-8">
              <img className="rounded-full" alt="User" src={userPic} />
            </div>
          ))}

        {user ? (
          <button onClick={handleLogout} className="btn ml-2">
            Logout
          </button>
        ) : (
          <Link to={`${ROUTES.LOGIN}`} className="btn">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
