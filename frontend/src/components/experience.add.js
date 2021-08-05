import React from "react";
import { useState } from "react";
import axios from "axios";
import "./project_add.css"
import Dashboard from "../pages/dashboard/dashboard";

const AddExperienceForm = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [fileName, setFileName] = useState("");


  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeonClick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", fileName);
    

    setTitle("");
    setdescription("");
    setFileName("");

    axios
      .post("http://localhost:5003/experience/add", formData)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });
  };
 

  return (
    <div>
      <Dashboard/>
      <div class="container_project">
        <form
          id="contact_project"
          onSubmit={changeonClick}
          encType="multipart/form-data"
        >
          <h3>Create new Experience</h3>
          <br></br>

          <input
            placeholder="Title"
            type="text_2"
            tabindex="1"
            required
            autofocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="Description"
            type="text_2"
            tabindex="2"
            required
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />

          <br></br><br></br>

          <label>Upload image</label><br></br>
          <input type="file" name="image" onChange={onChangeFile} /><br></br><br></br>

          <button
            name="submit_2"
            type="submit_2"
            id="contact-submit_2"
            data-submit_2="...Sending"
          >
            ADD
          </button>
        </form>
      </div>

     
    </div>
  );
};
export default AddExperienceForm;
