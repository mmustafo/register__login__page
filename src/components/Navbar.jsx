import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useLogout } from "../hooks/useLogout";
function Navbar() {
  const { user } = useGlobalContext(); 
  const { logout, isPending } = useLogout();

  return (
    <header className="bg-amber-100">
      <div className="navbar main-container">
        <div className="navbar-start">
          <Link className="btn btn-neutral" to="/">
            Logo
          </Link>
          
        </div>
        <div className="navbar-center flex gap-2 items-center">
        <Link
          to="/"
          className="w-full text-center py-2 px-4 bg-amber-100 text-amber-700 rounded-lg font-medium hover:bg-amber-200 transition"
        >
           Home
        </Link>
        <Link
          to="/Create"
          className="w-full text-center py-2 px-4 bg-amber-100 text-amber-700 rounded-lg font-medium hover:bg-amber-200 transition"
        >
           Create
        </Link>
        </div>
        <div className="navbar-end">
         

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
