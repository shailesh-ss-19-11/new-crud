import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./UserList";
import AddUser from "./AddUser";

const User = () => {
  const [users, setUsers] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [formData, setFormData] = useState({});

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

  useEffect(() => {
    fetchUser();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };

  const deleteUser = (id) => {};

  const addUser = (e) => {
    e.preventDefault();
    axios.post("https://retoolapi.dev/dqyyms/data", formData).then((result) => {
      console.log(result);
      if (result.status === 201) {
        fetchUser();
        setFormData({});
        setIsShow(false);
      }
    });
  };

  console.log(formData);

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
        formData={formData}
        isShow={isShow}
        setIsShow={setIsShow}
      />
    </>
  );
};
export default User;
