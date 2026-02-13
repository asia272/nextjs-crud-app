import { getUserById } from '../../actions/getUserById';
import ViewUser from '../../components/viewUser/ViewUser';

const page = async ({ params }:any) => {
  const { id } = await params;

  let user = null;
  let res = await getUserById(id);//find in database


  if (res.success) {
    user = res.user
  } else {
    console.log("something wrong")

  }
  //  convert Mongo doc → plain object
  user = JSON.parse(JSON.stringify(user));
  return <ViewUser user={user} />;
}

export default page
