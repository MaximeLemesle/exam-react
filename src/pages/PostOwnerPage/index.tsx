import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUser } from "../../services/api/jsonplaceholder/users"
import UserCard from "../../components/UserCard";
import User from "../../models/User";

export default function PostOwnerPage() {
  const { userId } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId || !Number.isInteger(Number(userId)) || Number(userId) <= 0) {
      setError("ID utilisateur invalide");
      return;
    }

    const loadUser = async () => {
      try {
        const fetchedUser = await fetchUser(Number(userId));
        setUser(fetchedUser);
      } catch (err) {
        setError("Impossible de récupérer les détails de l'utilisateur");
      }
    };

    loadUser();
  }, [userId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>Chargement des informations de l'auteur...</p>;
  }

  return (
    <div>
      <h3><em>Détails de l'auteur</em></h3>
      <UserCard user={user} />
    </div>
  );
}
