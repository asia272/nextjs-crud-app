'use client';

import { useRouter } from "next/navigation";
import { deleteUser } from "../../actions/deleteUser";
import styles from "./ViewUser.module.css";

const ViewUser = ({  plainUser }) => {

  let user = plainUser;
console.log(user)
  const router = useRouter();

  const remove = async (id) => {
    await deleteUser(id);
    alert("User deleted successfully");
    router.push("/"); // client navigation
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{user?.name}</h2>
      <p className={styles.text}>Age: {user?.age}</p>
      <p className={styles.text}>Email: {user?.email}</p>

      <div className={styles.actions}>
        <button
          className={styles.delete}
          onClick={() => remove(user._id)}
        >
          Delete
        </button>

        <button className={styles.update}>
          Update
        </button>
      </div>
    </div>
  );
};

export default ViewUser;
