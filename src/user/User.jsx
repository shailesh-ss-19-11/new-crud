import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./UserList";
import AddUser from "./AddUser";

const User = () => {
  const [users, setUsers] = useState([]);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const fetchUser = () => {
      axios
        .get("https://retoolapi.dev/dqyyms/data")
        .then((result) => {
          if (result.status === 200) {
            setUsers(result.data);
          } else {
            setUsers([]);
          }
        })
        .catch((err) => {
          console.log(err);
          setUsers([]);
        });
    };

    fetchUser();
  }, []);

  const handleFormChange = (e) => {
    console.log(e);
  };

  const addUser = (e) => {
    console.log(e);
  };

  return (
    <>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => setIsShow(true)}
      >
        Add User
      </button>
      <UserList users={users} />

      <AddUser
        addUser={addUser}
        handleFormChange={handleFormChange}
        isShow={isShow}
        setIsShow={setIsShow}
      />
    </>
  );
};
export default User;
