import { usePostContext } from "../../contexts/PostContextProvider";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./classes.module.css";

export default function PostPage() {
  const { post } = usePostContext();
  const navigate = useNavigate();

  // Redirection vers "detail"
  useEffect(() => {
    navigate("detail", { replace: true });
  }, [navigate]);

  // Si le post n'est pas encore chargé
  if (!post) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h2>Post Page</h2>
      <nav>
        <ul className={classes.ul}>
          <li>
            <Link to="detail" className={classes.link}>
              Voir les détails du post
            </Link>
          </li>
          <li>
            <Link to={`owner/${post.userId}`} className={classes.link}>
              Voir les informations de l'auteur
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
