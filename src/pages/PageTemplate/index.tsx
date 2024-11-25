import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

export default function PageTemplate() {

  return (
    <>
      <header>
        <h1>Exam Typescript React</h1>
        {/* NavBar */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>
          <Footer />
        </p>
      </footer>
    </>
  );
}
