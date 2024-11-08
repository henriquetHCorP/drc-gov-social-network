import User from '../../../../lib/models/user.model';
import { connect } from '../../../../lib/mongodb/mongoose';

export const POST = async (req) => {
  try {
    await connect();

    const data = await req.json();

    const user = await User.findOne({ username: data.username });
    // username as clearing mentioned into the userPage (information passed as JSON); 

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response('Failed to fetch the user data', { status: 500 });
  }
};