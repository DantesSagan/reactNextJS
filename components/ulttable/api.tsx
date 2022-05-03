import {
  getDocs,
  collection,
  updateDoc,
  setDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { firebaseLib } from '../firebaseLib/firebase';

export default function IndexApiTable({
  getDataDB,
  setLoading,
  table,
  rowTableID,
}) {
  // API POST REQUEST
  const submitData = async (dataArr: {}) => {
    const editRef = doc(firebaseLib.firestore(), 'table', rowTableID);
    // const getDocTodos = await getDocs(
    //   collection(firebaseLib.firestore(), 'table')
    // );
    // return Object.keys(table.docId).map(async (row: any) => {
    //   const response = await fetch('/api/firebase-api');
    if (dataArr === undefined) {
      return;
    }
    setDoc(editRef, {
      dataArr,
    }).then(() => {
      console.log(`Post successfull of ${dataArr}!`);
    });
    // });
  };

  // API DELETE REQUEST
  const deleteData = async (
    rowToDelete: string | null,
    rowDeleteID: number | null
  ) => {
    const editRef = doc(firebaseLib.firestore(), 'table', rowToDelete);
    await deleteDoc(editRef).then(() => {
      console.log(`Delete successfull of ${rowToDelete} and ${rowDeleteID}`);
      getDataDB().then(() => setLoading(false));
    });
  };

  // PUT method changes string in object and delete another strings and return only changed string
  // PATCH method chages string in object and return whole object with changed string

  // API PATCH METHOD FIRST NAME
  const patchFirstName = async (
    first_name: string | null,
    id: number | null
  ) => {
    await fetch(`http://localhost:4000/tableData/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ first_name }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
    getDataDB().then(() => setLoading(false));
  };

  // API PATCH METHOD LAST NAME
  const patchLastName = async (last_name: string | null, id: number | null) => {
    await fetch(`http://localhost:4000/tableData/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ last_name }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
    getDataDB().then(() => setLoading(false));
  };

  // API PATCH METHOD EMAIL
  const patchEmail = async (email: string | null, id: number | null) => {
    await fetch(`http://localhost:4000/tableData/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
    getDataDB().then(() => setLoading(false));
  };

  // API PATCH METHOD GENDER
  const patchGender = async (gender: string | null, id: number | null) => {
    await fetch(`http://localhost:4000/tableData/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ gender }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
    getDataDB().then(() => setLoading(false));
  };
  // API PATCH METHOD IP
  const patchIp = async (ip_address: string | null, id: number | null) => {
    await fetch(`http://localhost:4000/tableData/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ ip_address }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
    getDataDB().then(() => setLoading(false));
  };

  return {
    submitData,
    deleteData,
    patchFirstName,
    patchLastName,
    patchEmail,
    patchGender,
    patchIp,
  };
}
