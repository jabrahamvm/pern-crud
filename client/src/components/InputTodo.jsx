import React, {useState} from "react";
// This component will be used to input new todos into the database.

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        //e.preventDefault();
        try {
            console.log(description);
            const body = {description};
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <form className="form-row mt-5" onSubmit={onSubmitForm}>
            <div className="col-sm-10">
                <input type="text" className="form-control" placeholder="Add todo..." onChange={(e) => {setDescription(e.target.value)}}/>
            </div>
            <div className="col-sm-2">
                <button className="btn btn-success">Add</button>
            </div>
        </form>
    )
}

export default InputTodo;