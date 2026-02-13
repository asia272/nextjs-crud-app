'use client';

import { useRouter } from "next/navigation";
import { deleteUser } from "../../actions/deleteUser";
import styles from "./ViewUser.module.css";
import { useState } from "react";
import { updateUser } from "../../actions/updateUser";


interface UserType {
  _id:string,
  name: string,
  age: number,
  email: string
}
interface ViewUserProps {
  user: UserType;
}


const ViewUser = ( {user}: ViewUserProps ) => {

  const [isModal, setIsModal] = useState(false);
  const [newName, setNewName] = useState<string>(user?.name) || "";
  const [newAge, setNewAge] = useState <number>(user?.age);
  const router = useRouter();

  //delete
  const remove = async (id:string) => {
    await deleteUser(id);
    alert("User deleted successfully");
    router.push("/"); // client navigation
  };
  //update
  const update = async (id:string) => {
    const res = await updateUser(id, {
      name: newName,
      age: newAge
    });
    if (res.success) {
      alert("User updated successfully");
      setIsModal(false);
      router.refresh(); // refresh server data
    }
  }

  return (
    <div>
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

          <button className={styles.update} onClick={() => setIsModal(true)}>
            Edit
          </button>
        </div>
      </div>

      {/* for updation */}
      {/* Modal */}
      {isModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button
              className={styles.closeBtn}
              onClick={() => setIsModal(false)}
            >
              ✕
            </button>

            <h3 className={styles.modalTitle}>Edit User</h3>

            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className={styles.input}
              placeholder="Enter new name"
            />

            <input
              type="number"
              value={newAge}
              onChange={(e) => setNewAge(Number(e.target.value))}
              className={styles.input}
              placeholder="Enter new age"
            />

            <button
              className={styles.updateBtn}
              onClick={() => update(user._id)}
            >
              Update User
            </button>
          </div>
        </div>
      )}

    </div>

  );
};

export default ViewUser;
