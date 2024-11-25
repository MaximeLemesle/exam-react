import { Link } from "react-router-dom";
import classes from "./classes.module.css";

export default function NavBar() {
  return (
    <p>
      <Link to="/" className={classes.nav}>
        HomePage
      </Link>
    </p>
  );
}
