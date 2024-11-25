import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <>
      <h2>404 Page</h2>
      <p>
        {" "}
        <Link to="/">Retourner à la page d'accueil</Link>
      </p>
    </>
  );
}
