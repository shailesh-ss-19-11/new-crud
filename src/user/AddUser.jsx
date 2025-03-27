import React from "react";
import { Modal } from "react-bootstrap";

const AddUser = ({ isShow, setIsShow, handleFormChange, addUser }) => {
  return (
    <div>
      <Modal
        show={isShow}
        onHide={() => setIsShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" onSubmit={addUser}>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="full name"
                name="full_name"
                onChange={handleFormChange}
              />
              <label for="floatingInput">Full Name</label>
            </div>

            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="full name"
                name="address"
                onChange={handleFormChange}
              />
              <label for="floatingInput">Address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="full name"
                name="company_name"
                onChange={handleFormChange}
              />
              <label for="floatingInput">Company Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="full name"
                name="mobile_number"
                onChange={handleFormChange}
              />
              <label for="floatingInput">Mobile Number</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="full name"
                name="age"
                onChange={handleFormChange}
              />
              <label for="floatingInput">Age</label>
            </div>
            <button className="btn btn-md btn-success">Submit</button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddUser;
