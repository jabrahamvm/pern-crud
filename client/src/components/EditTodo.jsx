import React, {useState} from "react";

const EditTodo = ({id, description}) => {
    const [newDescription, setNewDescription] = useState("");
    const handleSubmit = async e => {
        try {
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({description: newDescription})
            });
            console.log(response);

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit {id}
            </button>

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update task</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="form-row mt-5" onSubmit={handleSubmit}>
                            <div className="modal-body">
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" placeholder={description} onChange={(e) => {setNewDescription(e.target.value)}} />
                                    </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTodo;