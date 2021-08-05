// import React, { Component } from "react";
// import axios from "axios";

// // import ProjectCard from "../../components/Projects-cards/project.cards";
// // const project = [
// //   { title: "hello", desc: "project1" },
// //   { title: "hello2", desc: "project2" },
// //   { title: "hello3", desc: "project3" },
// //   { title: "hello", desc: "project1" },

// // ];

// export default class Projects extends Component {
//   constructor(props) {
//     super(props);

//     // this.deleteProjects = this.deleteProjects.bind(this)

//     this.state = { Projects: [] };
//   }

//   async componentDidMount() {
//     await axios
//       .get("http://localhost:5003/project/")
//       .then((response) => {
//         this.setState({ Projects: response.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   updateProjects = (id) => {
//     console.log();
//     axios.put(`http://localhost:5003/project/update/${id}`).then((response) => {
//       console.log(response.data);
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div className="cards6">
//           {this.state.Projects &&
//             this.state.Projects.map((item, index) => {
//               return (
//                 <div
//                   class="container7"
//                   style={{ margin: "20px" }}
//                   key={item._id}
//                 >
//                   Title <br></br>
//                   <input type="text_4" value={item.title} name="title" />
//                   <br></br>
//                   Description{" "}
//                   <input
//                     type="text_4"
//                     value={item.description}
//                     name="description"
//                   />
//                   <img
//                     src={`http://localhost:5003/project/projects/uploads/${item.image}`}
//                     alt=""
//                     height="200px"
//                     className="card8-img"
//                   ></img>
//                   <label>Upload image</label>
//                   <input type="file" name="image" />
//                   <br></br> <br></br>{" "}
//                   <button
//                     type="submit"
//                     style={{ marginLeft: "40%" }}
//                     onClick={() => this.updateProjects(item._id)}
//                   >
//                     update
//                   </button>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     );
//   }
// }

// import React, { Component } from 'react';
// import axios from 'axios';

// export default class ProjectUpdate extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { Projects: [] };
//     this.onChangeTitle= this.onChangeTitle.bind(this);
//     this.onChangeDescription = this.onChangeDescription.bind(this);

//     this.state = {
//       title: '',
//       description: '',

//     }
//   }

//   componentDidMount() {
//     axios.get('http://localhost:5003/project/'+this.props.match.params.id)
//       .then(response => {
//         this.setState({
//           title: response.data.title,
//           description: response.data.description,

//         })
//       })
//       .catch(function (error) {
//         console.log(error);
//       })

//   }

//   onChangeTitle(e) {
//     this.setState({
//       title: e.target.value
//     })
//   }

//   onChangeDescription(e) {
//     this.setState({
//       description: e.target.value
//     })
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const projects = {
//       title: this.state.title,
//       description: this.state.description

//     }

//     console.log(projects);

//     axios.put('http://localhost:5003/project/update/' + this.props.match.params.id, projects)
//       .then(res => console.log(res.data));

//   }

//   render() {
//     return (
//     <div>
//       <h3>Edit Project Log</h3>
//       <form onSubmit={this.onSubmit}>

//         <div className="form-group">
//           <label>Title: </label>
//           <input  type="text_4"
//           style={{backgroundColor:"red"}}
//               required
//               className="form-control"
//               value={this.state.title}
//               onChange={this.onChangeTitle}
//               />
//         </div>
//         <div className="form-group">
//           <label>Description: </label>
//           <input  type="text_4"
//            style={{backgroundColor:"red"}}
//               required
//               className="form-control"
//               value={this.state.description}
//               onChange={this.onChangeDescription}
//               />
//         </div>

//         <div >
//           <input type="submit" value="UPDATE" />
//         </div>
//       </form>
//     </div>
//     )
//   }
// }

import React from "react";
import { useState } from "react";
import axios from "axios";
import "./project_edit.css"
import { useParams } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";

const ProjectUpdate = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [fileName, setFileName] = useState("");
  const [button, setbutton] = useState("");
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
    formData.append("button", button);

    setTitle("");
    setdescription("");
    setFileName("");
    setbutton("");
    axios
      .put(`http://localhost:5003/project/update/${id}`, formData)
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
          <h3>Edit Project</h3>
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
          <input
            placeholder="button"
            type="text_4"
            tabindex="2"
            required
            value={button}
            onChange={(e) => setbutton(e.target.value)}
          /><br></br><br></br>
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
      {/* <form onsubmit_4={changeonClick} encType="multipart/form-data">
        <div>
          <label>Title</label>
          <input
            type="text_4"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text_4"
            required
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
          <div>
            <label>Upload image</label>
            <input type="file" name="image" onChange={onChangeFile} />
          </div>
          <div>
            <button type="submit">Create project</button>
          </div>
        </div>
      </form> */}
      {/* <form action="/project/add" encType="multipart/form-data">
          <label>upload image</label>
          <input type="file" name="image"/>
          <div>
              <input type="submit" value="Create New Project" />
            </div>
        </form> */}
    </div>
  );
};
export default ProjectUpdate;
