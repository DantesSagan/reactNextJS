export default function HandlersTable({
  setClose,
  setTable,
  table,
  firstName,
  lastName,
  email,
  gender,
  ip,
  patchFirstName,
  patchLastName,
  patchGender,
  patchEmail,
  patchIp,
  submitData,
  deleteData,
  snackArray,
  setOpenSnack,
  rowTableID,
  id,
  setId,
}) {
  const handleEditFirstName = (
    rowToEdit: string | null,
    rowFirstName: string | null,
    rowID: number | null
  ) => {
    setClose(!close);
    return Object.keys(table.docId).map((item) => {
      return rowFirstName === table.docId[item].first_name
        ? patchFirstName((table.docId[item].first_name = rowToEdit), rowID)
        : console.log('error');
    });
  };

  const handleEditLastName = (
    rowToEdit: string | null,
    rowLastName: string | null,
    rowID: number | null
  ) => {
    setClose(!close);
    return Object.keys(table.docId).map((item) => {
      rowLastName === table.docId[item].last_name
        ? patchLastName((table.docId[item].last_name = rowToEdit), rowID)
        : console.log('error');
    });
  };

  const handleEditEmail = (
    rowToEdit: string | null,
    rowEmail: string | null,
    rowID: number | null
  ) => {
    setClose(!close);
    return Object.keys(table.docId).map((item) => {
      rowEmail === table.docId[item].email
        ? patchEmail((table.docId[item].email = rowToEdit), rowID)
        : null;
    });
  };

  const handleEditGender = (
    rowToEdit: string | null,
    rowGender: string | null,
    rowID: number | null
  ) => {
    setClose(!close);
    return Object.keys(table.docId).map((item) => {
      rowGender === table.docId[item].gender
        ? patchGender((table.docId[item].gender = rowToEdit), rowID)
        : null;
    });
  };
  const handleEditIp = (
    rowToEdit: string | null,
    rowIp: string | null,
    rowID: number | null
  ) => {
    setClose(!close);
    return Object.keys(table.docId).map((item) => {
      rowIp === table.docId[item].ip_address
        ? patchIp((table.docId[item].ip_address = rowToEdit), rowID)
        : null;
    });
  };

  const handleAdd = () => {
    return Object.keys(table.docId).map((row: any) => {
      if (table.docId[row].dataArr.id === undefined) {
        return;
      }

      // const idIndex: boolean = table.docId[row] === 0;
      // const idIndexPlusOne: number = table.docId[row].length + 1;
      let idNum: number = id;
      // if (idIndex) {
      //   const newData = {
      //     id: 1,
      //     first_name: firstName,
      //     last_name: lastName,
      //     email: email,
      //     gender: gender,
      //     ip_address: ip,
      //     docID: rowTableID,
      //   };
      //   snackArray.push(newData);
      //   table.docId.push(newData);
      //   submitData(newData);
      //   setOpenSnack(true);
      // } else if (!idIndex) {
      const newData = {
        id: idNum,
        first_name: firstName,
        last_name: lastName,
        email: email,
        gender: gender,
        ip_address: ip,
        docID: rowTableID,
      };
      snackArray.push(newData);
      table.docId.push(newData);
      submitData(newData);
      setOpenSnack(true);
      // }
    });
  };

  const handleDelete = (rowToDelete: string, rowDeleteID: number | null) => {
    // const index = table.docId.findIndex((itemID) => {
    //   return itemID.id === rowToDelete;
    // });
    // console.log(index);
    deleteData(rowToDelete, rowDeleteID);
    return Object.keys(table.docId).map((row: string) => {
      Object.values(table.docId[row].dataArr).filter(
        (rowID: { id: number }) => {
          rowID.id !== rowDeleteID;
        }
      );
    });
  };
  return {
    handleEditFirstName,
    handleEditLastName,
    handleEditEmail,
    handleEditGender,
    handleEditIp,
    handleDelete,
    handleAdd,
  };
}
