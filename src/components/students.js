import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import Student from "./student";
import Search from "./search";
import FormStudent from "./formStudent";
import axios from "axios";

function Students() {
function handleDeleteButtonClick(id, name) {
    console.log("delete button clicked " + id);
    let ans = window.confirm("Do you really want to delete record of " + name);
    if (ans == true) {

    let updatedStudentList = studentList.filter((e) => e.id != id);
    setStudentList(updatedStudentList);
    updatedStudentList = filteredStudentList.filter((e) =>e.id != id);
    setFilteredStudentList(updatedStudentList);
    setMessage("Record of " + name + " deleted successfully");
    window.setTimeout(() => 
    {setMessage("");}, 3000);
    } else {

    setMessage("Delete operation cancelled");
    window.setTimeout(() => {
    setMessage("");
    }, 3000);
    }
    }
    function handleEditButtonClick(studentObject) {
    setView("form");
    setAction("edit");
    setStudentRecord(studentObject);
    }
    function handleAddOrListButtonClick() {
    if (view == "list") {
    setView("form");
    setAction("add");
    setStudentRecord({ rollno: "", name: "", marks: "" });
    } else if (view == "form") {
    showStudentRecords();
 }
}
function showStudentRecords() {
    setView("list");
    setFilteredStudentList(studentList);
     }
    function handleCancelButtonClick() {
    showStudentRecords();
     }
    function handleSearchTextKeyUp(searchText) {
    let updatedStudentList = studentList.filter((e) =>
    e.name.toLowerCase().startsWith(searchText.trim().toLowerCase())
     );
    setFilteredStudentList(updatedStudentList);
     }
    function handleSubmitForm(student) {
    setView("list");
    if(action=="add")
     {
    student.id=studentList[studentList.length-1].id+1
    setStudentList( [...studentList, student] );
    setFilteredStudentList([...studentList, student]);
    setMessage("A record is added successfully");
     }//if
    else if(action=="edit")
     {
    let updatedStudentList=studentList.map((e)=>
     {
    if(e.id==student.id)
     { 
        return student;
     }
    else
     {
    return e;
     }
     })
    setStudentList(updatedStudentList);
    setFilteredStudentList(updatedStudentList);
    setMessage("Edit operation is successful.");
     }//else
     }
     useEffect(() => {
      // Code here will run after *every* render
      getData(); // called only for first render
       }, []);
      function getData()
       {
            axios.get('http://localhost:3001/data')
            .then(function (response) {
      // handle success
      // console.log(response.data);
      setStudentList(response.data);
      setFilteredStudentList(response.data);
       })
       .catch(function (error) {
      // handle error
      console.log(error);
       })
       .finally(function () {
      // always executed
       });
       }
     let dataStudents = [
        { id: 1, rollno: "10", name: "Satish", marks: 83.3 },
        { id: 2, rollno: "11", name: "Nutan", marks: 55.0 },
        { id: 3, rollno: "12", name: "Roopal", marks: 38.2 },
        { id: 4, rollno: "18", name: "Sahil", marks: 75.8 },
        { id: 5, rollno: "19", name: "Anish", marks: 69.6 },
        { id: 6, rollno: "20", name: "Jeevan", marks: 33.1 },
        { id: 7, rollno: "21", name: "Saurav", marks: 56.4 },
        { id: 8, rollno: "22", name: "Leena", marks: 87.5 },
        { id: 9, rollno: "23", name: "Neelam", marks: 19.2 },
        { id: 10, rollno: "25", name: "Ganesh", marks: 69.9 },
        { id: 11, rollno: "27", name: "Sarika", marks: 64.2 },
        { id: 12, rollno: "29", name: "Rohan", marks: 45.5 },
        ];
       let [studentList, setStudentList] = useState([]);
       let [filteredStudentList, setFilteredStudentList] = useState([]);
       let [message, setMessage] = useState("");
       let [view, setView] = useState("list");
       let [action, setAction] = useState("add");
       let [studentRecord, setStudentRecord] = useState({});
       let content_header;
       if (filteredStudentList.length == 0) {
         content_header = "No student";
        } else if (filteredStudentList.length == 1) {
         content_header = "Only one student";
        } else {
         content_header = "Total " + filteredStudentList.length + " students";
        }
       return (
       <div className="container container-students p-2"> {message && <div className="div-message">{message}</div>} {view == "list" && (
       <div className="div-student-count">{content_header}</div>
        )}{view == "list" && <Search
       onSearchTextKeyUp={handleSearchTextKeyUp} />} <div className="mb-2"> <button className="btn btn-light"
       onClick={handleAddOrListButtonClick}> {view == "list" ? "Add a Student" : "Show Student Records"}
       </button>
</div> {view == "list" && filteredStudentList.length != 0 && (
<div> <div className="row"> <div className="col-1">S.N.</div> <div className="col-2">Roll No.</div> <div className="col-2">Name</div> <div className="col-2">Marks</div>
</div> {filteredStudentList.map((student, index) => (
<Student
student={student}
key={student.id}
index={index}
onDeleteButtonClick={handleDeleteButtonClick}
onEditButtonClick={handleEditButtonClick}
/>
 ))}
</div>
 )}{view == "form" && (
<FormStudent
onCancelButtonClick={handleCancelButtonClick}
onSubmitForm={handleSubmitForm}
studentRecord={studentRecord}
action={action}
/>
 )}
</div>
 );
}
export default Students;