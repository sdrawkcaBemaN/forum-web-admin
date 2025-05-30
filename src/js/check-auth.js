import { getAuthenticatedUser } from "./api/auth.js";

export async function checkAuth(eligibleRoles = []) {
  const { data: user } = await getAuthenticatedUser();
  if (!user) {
    window.location.href = "./login.html";
    return null;
  }

  if (user && !eligibleRoles.includes(user.role)) {
    window.location.href = "./login.html";
    return null;
  }

  return user;
}
