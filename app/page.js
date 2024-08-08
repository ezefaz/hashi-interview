import { fetchUsersData } from "./actions";
import UsersTable from "./components/UsersTable";

export default async function Home() {
  const userData = await fetchUsersData();
  return (
    <main>
      <UsersTable users={userData} />
    </main>
  );
}
