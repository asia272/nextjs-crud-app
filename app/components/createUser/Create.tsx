"use client";
import Link from 'next/link'
import styles from "./Create.module.css"
import { useForm } from "react-hook-form";
import { createUser } from '../../actions/createUser';
import { useRouter } from "next/navigation";

interface CreateUserFormType {
    name: string,
    age: number,
    email: string,

}


const Create = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CreateUserFormType>();

    const onSubmit = async (data: CreateUserFormType) => {
        // console.log(data);


        const res = await createUser(data)

        if (res.success) {
            alert(res.message)
            reset()
            router.push("/")
        } else {
            alert(res.message)
            
        }
    };


    return (
        <div className={styles.CreateContainer}>
            <button className={styles.backBtn}>
                <Link href="/"> Go to dashboard</Link>
            </button>
            <h1>Create User</h1>
            <form action="" className={styles.createForm} onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" placeholder='name' id='name'
                        {...register("name", { required: "Name is required" })} />
                    {errors.name && <p className={styles.inputError}>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" placeholder='age' id='age'
                        {...register("age", { required: "Age is required" })}
                    />
                    {errors.age && <p className={styles.inputError}>{errors.age.message}</p>}
                </div>
                <div>
                    <label htmlFor="mail">Email:</label>
                    <input type="mail" placeholder='Email' id='mail'
                        {...register("email", { required: "Email is required" })} />
                    {errors.email && <p className={styles.inputError}>{errors.email.message}</p>}
                </div>
                <button>Create</button>
            </form >

        </div >
    )
}

export default Create
