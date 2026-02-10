import Link from "next/link";
import styles from "./Dashboard.module.css";
import { getUsers } from "../../actions/getUsers";

const Dashboard = async () => {
  const allUsers = await getUsers();

  return (
    <div className={styles.dashboardContainer}>
      <h1>Main Dashboard to store all Users</h1>

      {allUsers.map((user) => (
        <div key={user._id} className={styles.userCard}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button className={styles.viewBtn}>
            <Link href={`/user/${user._id}`} >View Detail </Link>
          </button>

        </div>
      ))}

      <Link href="/create" className={styles.createBtn}>
        Create User
      </Link>
    </div>
  );
};

export default Dashboard;
