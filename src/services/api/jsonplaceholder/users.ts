import { rootUrl } from "./index";
import User from "../../../models/User";

const usersUrl = `${rootUrl}/users`;

export async function fetchUser(userId: number): Promise<User> {
  const response = await fetch(`${usersUrl}/${userId}`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération de l'utilisateur");
  }
  return response.json();
}