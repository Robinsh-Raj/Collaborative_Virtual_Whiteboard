
import React from "react";

function Student(props)
{
    function handleDeleteButtonClick()
 {
        props.onDeleteButtonClick(props.student.id,props.student.name);
 }
 function handleEditButtonClick()
 {
        props.onEditButtonClick(props.student);
 }

    return (
        <div className="row student">
        <div className="col-1 ">{props.index + 1}</div>
        <div className="col-2">{props.student.rollno}</div>
        <div className="col-2">{props.student.name}</div>
        <div className="col-2">{props.student.marks}</div>
        <div className="col-2"><button className="btn btn-primary "onClick={handleEditButtonClick}>Edit</button></div>
        <div className="col-2"><button className="btn btn-primary " onClick={handleDeleteButtonClick}>Delete</button></div>
        
    
         </div>
        
    );
}
export default Student;