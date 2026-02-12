
import Link from "next/link";
import styles from "./Dashboard.module.css";
import { getUsers } from "../../actions/getUsers";


const Dashboard = async () => {

  let allUsers = [];


  const res = await getUsers();

  if (res.success) {
    allUsers = res.users
    console.log(res.users)
  } else {
    alert(res.message)
  }



  return (
    <div className={styles.dashboardContainer}>
      <h1>Main Dashboard to store all Users</h1>

      {allUsers && allUsers.map((user) => (
        <div key={user._id} className={styles.userCard}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>

          <Link href={`/user/${user._id}`} >

            <button className={styles.viewBtn}>  View Detail </button>
          </Link>


        </div>
      ))}

      <Link href="/create" className={styles.createBtn}>
        Create User
      </Link>
    </div>
  );
};

export default Dashboard;
