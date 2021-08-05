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

//   deleteProjects = (id) => {
//     console.log();
//     axios
//       .delete(`http://localhost:5003/project/delete/${id}`)
//       .then((response) => {
//         console.log(response.data);
//       }, alert("Your file will be deleted"));

//     this.setState({
//       Projects: this.state.Projects.filter((el) => el._id !== id),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div className="cards6">
//           {this.state.Projects &&
//             this.state.Projects.map((item, index) => {
//               return (
//                 <div class="container7" key={item._id}>
//                   <div className="card8">
//                     <img
//                       src={`http://localhost:5003/project/projects/uploads/${item.image}`}
//                       alt=""
//                       height="200px"
//                       className="card8-img"
//                     ></img>
//                     <div className="card8-text">
//                       <h3 className="card8-title">{item.title}</h3>
//                       <p className=" card8-body">{item.description}</p>
//                     </div>
//                   </div>
//                   <button
//                     type="submit"
//                     style={{ marginLeft: "40%" }}
//                     onClick={() => this.deleteProjects(item._id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     );
//   }
// }
