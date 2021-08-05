import React, { Component } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import "./project.scss";

// import ProjectCard from "../../components/Projects-cards/project.cards";
// const project = [
//   { title: "hello", desc: "project1" },
//   { title: "hello2", desc: "project2" },
//   { title: "hello3", desc: "project3" },
//   { title: "hello", desc: "project1" },

// ];

export default class Projects extends Component {
  constructor(props) {
    super(props);

    // this.deleteProjects = this.deleteProjects.bind(this)

    this.state = { Projects: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5003/project/")
      .then((response) => {
        this.setState({ Projects: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // deleteProjects(id) {
  //     axios.delete('http://localhost:5007/create/'+id)
  //       .then(response => { console.log(response.data)});

  //     this.setState({
  //       Projects: this.state.Projects.filter(el => el._id !== id)
  //     })
  //   }

  render() {
    return (
      <div>
        <Navbar />
        <div className="cards6">
          {this.state.Projects &&
            this.state.Projects.map((item, index) => {
              return (
                <div class="container7" key={item._id}>
                  <div className="card8">
                   
                      <img
                        src={`http://localhost:5003/project/projects/uploads/${item.image}`}
                        alt=""
                        height="350px"
                        className="card8-img"
                      ></img>
                    
                    <div className="card8-text">
                      <h1 style={{color:"white"}} className="card8-title">{item.title}</h1>
                      <p className=" card8-body">{item.description}</p>
                    </div>
                  
                  </div>
                </div>
              );
            })}
        </div>
        <Footer />
      </div>
    );
  }
}
