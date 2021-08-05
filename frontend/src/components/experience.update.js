import React from "react";
import { useState } from "react";
import axios from "axios";
import "./project_edit.css"
import { useParams } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";

const ExperienceUpdate = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [fileName, setFileName] = useState("");
  const { id } = useParams();
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
      .put(`http://localhost:5003/experience/update/${id}`, formData)
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <Dashboard />
      <div class="container_project_update">
        <form
          id="contact_project_edit"
          onSubmit={changeonClick}
          encType="multipart/form-data"
        >
          <h3>Edit Experience</h3>
          <br></br>

          <input
            placeholder="Title"
            type="text_4"
            tabindex="1"
            required
            autofocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="Description"
            type="text_4"
            tabindex="2"
            required
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
         <br></br><br></br>
          <label>Upload image</label><br></br>
          <input type="file" name="image" onChange={onChangeFile} />
          <br></br><br></br>
          <button
            name="submit_4"
            type="submit_4"
            id="contact_project_edit-submit_4"
            data-submit_4="...Sending"
          >
            UPDATE
          </button>
        </form>
      </div>

    </div>
  );
};
export default ExperienceUpdate;
