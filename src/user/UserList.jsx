const UserList = ({ users }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Full Name</th>
          <th scope="col">Mobile</th>
          <th scope="col">Address</th>
          <th scope="col">Age</th>
          <th scope="col">Company Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {users && users.length > 0 ? (
          users.map((user, index) => (
            <tr key={user.id || index}>
              <th scope="row">{user.id}</th>
              <td>{user.full_name}</td>
              <td>{user.mobile_number}</td>
              <td>{user.address}</td>
              <td>{user.age}</td>
              <td>{user.company_name}</td>
              <td>
                <button className="btn btn-sm btn-success">Update</button>
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" className="text-center">
              No data found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserList;
