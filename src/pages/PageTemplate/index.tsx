import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import classes from "./classes.module.css";

export default function PageTemplate() {
  return (
    <>
      <header className={classes.header}>
        <h1>Exam Typescript React</h1>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
