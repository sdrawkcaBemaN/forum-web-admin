import { getAuthenticatedUser } from "./api/auth.js";

export async function checkAuth(
  eligibleRoles = [],
  eligibleStatus = ["verified"]
) {
  const { data: admin } = await getAuthenticatedUser();
  if (!admin) {
    window.location.href = "./login.html";
    return null;
  }

  if (admin && !eligibleRoles.includes(admin.role)) {
    window.location.href = "./login.html";
    return null;
  }

  if (!admin || !eligibleStatus.includes(admin.status)) {
    window.location.href = "./login.html";
    return null;
  }

  return admin;
}
