import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const { user } = useGlobalContext(); 
  const { logout, isPending } = useLogout();

  return (
    <header className="bg-base-200">
      <div className="navbar main-container">
        <div className="navbar-start">
          <Link className="btn btn-neutral" to="/">
            Logo
          </Link>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-3.5 items-center mr-[20px]">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                  <img
                    src={user.photoURL}
                    alt={`${user.displayName}'s Avatar`}
                  />
                </div>
              </div>
              <div>
                <h2>Salom {user.displayName}</h2>
              </div>
            </div>
          ) : (
            <div>
              <h2>Loading...</h2>
            </div>
          )}

          {!isPending ? (
            <button onClick={logout} className="btn btn-secondary btn-outline">
              Logout
            </button>
          ) : (
            <button className="btn btn-secondary btn-disabled" disabled>
              Loading...
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
