import { getSession } from 'next-auth/react';

// In this case we are using the getSession for holding by async await const
// a const session where we get request and specify it by
// if there is no session display unauthenticated user
// else display by status 401 message:"Success" and session whre holding data
// {
// message: "Success",
// session: {
// user: {
// name: "FirstName SecondName",
// email: "example@mail.com",
// image: "image"
// },
// expires: "date"
// }
// }
const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: 'Unathenticated user' });
  } else {
    res.status(200).json({ message: 'Success', session });
  }
};
export default handler;
