export const LOAD_USERS = "LOAD_USERS";

export function loadUsers(users) {
  console.log("dispatching reciveUsers", users);
  return {
    type: LOAD_USERS,
    users,
  };
}
