import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const {
    auth: { user },
    setAuth,
  } = useAuth();
  return (
    <nav>
      <div className="nav-bar-desktop">
        <div className="routes-container">
          <Link className="home" to="/">
            Hardcore
          </Link>
          {user ? (
            <Link className="my-routines" to={`/myroutines/${user}`}>
              My Routines
            </Link>
          ) : null}
          <Link className="routines" to="/routines/all">
            Routines
          </Link>
          <Link className="activities" to="/activities">
            Activities
          </Link>
        </div>
        {user ? (
          <Link
            className="log-out"
            to="/"
            onClick={() => {
              setAuth({});
              localStorage.clear();
            }}
          >
            Log Out
          </Link>
        ) : (
          <Link className="log-in-register" to="/account/login">
            Log&nbsp;In / Register
          </Link>
        )}
      </div>

      <div className="nav-bar-mobile">
        <div>
          <Link className="mobile-home" to="/">
            Worqout
          </Link>
          <div className="mobile-routes-container">
            {user ? (
              <Link className="mobile-my-routines" to={`/myroutines/${user}`}>
                My Routines
              </Link>
            ) : null}
            <Link className="mobile-routines" to="/routines/all">
              Routines
            </Link>
            <Link className="mobile-activities" to="/activities">
              Activities
            </Link>
          </div>
        </div>
        {user ? (
          <Link
            className="mobile-log-out"
            to="/"
            onClick={() => {
              setAuth({});
              localStorage.clear();
            }}
          >
            Log Out
          </Link>
        ) : (
          <Link className="mobile-log-in-register" to="/account/login">
            Log&nbsp;In / Register
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
