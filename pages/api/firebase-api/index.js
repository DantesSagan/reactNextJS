import { firebaseLib } from '../../../components/firebaseLib/firebase';

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
  const docId = await firebaseLib
    .firestore()
    .collection('table')
    .get()
    .then((serverUpdate) => {
      let todolist = [];
      serverUpdate.docs.forEach((doc) => {
        todolist.push(doc.data());
      });
      return todolist;
    })
    .catch((error) => {
      console.error('Error to get document: ', error);
    });

  if (!docId) {
    res.status(401).json({ error: 'Cannot receive data' });
  } else {
    res.status(200).json({ message: 'Success', docId });
  }
};
export default handler;
