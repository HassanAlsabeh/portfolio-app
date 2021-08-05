import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./experience_list.css";
import Dashboard from "../pages/dashboard/dashboard";

const Experiences = (props) => (
  <tr>
    <td>{props.experiences.title}</td>
    <td>{props.experiences.description}</td>
    <td>{props.experiences.image}</td>
    

    <td>
      <Link to={`/experience/update/${props.experiences._id}`}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteExperience(props.experiences._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class ExperienceList extends Component {
  constructor(props) {
    super(props);

    this.deleteExperience = this.deleteExperience.bind(this);

    this.state = { Experience: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5003/experience/")
      .then((response) => {
        this.setState({ Experience: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteExperience(id) {
    axios
      .delete("http://localhost:5003/experience/delete/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      Experience: this.state.Experience.filter((el) => el._id !== id),
    });
  }

  experienceList() {
    return this.state.Experience.map((currentexperiences) => {
      return (
        <Experiences
          experiences={currentexperiences}
          deleteExperience={this.deleteExperience}
          key={currentexperiences._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Dashboard />
        <div className="table_projects">
          
          <table>
            <caption>Experience List</caption>
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Image</th>
                <th scope="col">EDIT/DELETE</th>
              </tr>
            </thead>
            <tbody>{this.experienceList()}</tbody>
          </table>
          <br></br>
          <br></br>
          <button1
          className="button_project_1"
            id="contact-submit"
            data-submit="...Sending"
           
          >
            <Link  to={"/experience/add/"}>ADD NEW EXPERIENCE</Link>
          </button1>

          {/* <div>
        <h3>Logged project</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{this.projectList()}</tbody>
        </table><br></br><br></br>
        </div><Link to={"/project/add/"} style={{color:"red"}}>ADD NEW PROJECT</Link>      */}
        </div>
      </div>
    );
  }
}
