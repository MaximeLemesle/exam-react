import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <>
      <p>404 Page</p>
      <p>
        {" "}
        <Link to="/">Retourner à la page d'accueil</Link>
      </p>
    </>
  );
}
