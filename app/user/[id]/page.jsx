

import { getUserById } from '../../actions/getUserById';
import ViewUser from '../../components/viewUser/ViewUser';

const page = async ({ params }) => {
  const { id } = await params;

  let user = await getUserById(id);//find in database

 
  //  convert Mongo doc → plain object
  const plainUser = JSON.parse(JSON.stringify(user));
  
  return <ViewUser plainUser={plainUser} />;


}

export default page
