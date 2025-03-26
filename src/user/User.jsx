import { useEffect, useState } from "react";
import UserList from "./UserList";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
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

  return (
    <>
      <button className="btn btn-sm btn-primary">Add User</button>

      {/* <UserList users={users} /> */}
    </>
  );
};
export default User;
