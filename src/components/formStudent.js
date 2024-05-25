import React from "react";
import { useState } from "react";
function FormStudent(props) {
  let [student, setStudent] = useState(props.studentRecord);
  function handleCancelButtonClick() {
    props.onCancelButtonClick();
  }
  function handleInputClick(event) {
    setStudent({ ...student, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    // pass data of student object to parent
    event.preventDefault();
    props.onSubmitForm(student);
  }
  return (
    <>
      <form className="text-dark bg-primary p-4" onSubmit={handleSubmit}>
        {/* row starts */}
        <div className="form-group row align-items-center">
          <div className="col-5 form-label mb-2">
            <label>Roll Number</label>
          </div>
          <div className="col-7 px-0 mb-2">
            <input
              type="text"
              className="form-control"
              name="rollno"
              value={student.rollno}
              onChange={handleInputClick}
              placeholder="Enter roll number"
              required
            />
          </div>
        </div>
        {/* row ends */}
        {/* row starts */}
        <div className="form-group row align-items-center">
          <div className="col-5 form-label mb-2">
            <label>Name</label>
          </div>
          <div className="col-7 px-0 mb-2">
            <input
              type="text"
              className="form-control"
              name="name"
              value={student.name}
              onChange={handleInputClick}
              placeholder="Enter Name"
            />
          </div>
        </div>
        {/* row ends */}
        {/* row starts */}
        <div className="form-group row align-items-center">
          <div className="col-5 form-label mb-2">
            <label>Marks</label>
          </div>
          <div className="col-7 px-0 mb-2">
            <input
              type="text"
              className="form-control"
              name="marks"
              value={student.marks}
              placeholder="Enter Marks"
              onChange={handleInputClick}
            />
          </div>
        </div>
        {/* row ends */}
        {/* row starts */}
        <div className="form-group offset-5 text-center mb-0">
          <button className="btn btn-light" type="submit">
            {props.action == "add" ? "Add" : "Update"}
          </button>
          &nbsp;&nbsp;&nbsp;
          <button className="btn btn-light" onClick={handleCancelButtonClick}>
            CANCEL
          </button>
        </div>
      </form>
    </>
  );
}
export default FormStudent;
