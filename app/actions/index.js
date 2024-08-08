"use server";

export async function fetchUsersData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Error getting users");
    }

    const users = await response.json();

    return users;
  } catch (error) {
    console.log("[ERROR_FETCHING_USERS", error);
  }
}
