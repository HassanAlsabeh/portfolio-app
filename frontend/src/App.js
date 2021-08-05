import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
// import Home2 from "./pages/home2/home2";
import About from "./pages/about/about";
import Experience from "./pages/experience/experience";
import Projects from "./pages/projects/projects";
import Mailer from "./pages/contact/contact";
import ContactCrud from "./pages/contact/contact.crud";
import UpdateAbout from "./components/about.crud";
import ProjectAdd from "./components/project.add";
import ExperienceAdd from "./components/experience.add";
import ProjectUpdate from "./components/project.update";
import ExperienceUpdate from "./components/experience.update";
import Projectdelete from "./components/project.delete";
import Login from "../src/pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import ProjectsList from "./components/project.list";
import ExperienceList from "./components/experience.list";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      {/* <Route path="/home" exact component={Home2} /> */}
      <Route path="/about" exact component={About} />
      <Route path="/about/update/60f9310d8fa6219c03894f64" exact component={UpdateAbout} />
      <Route path="/project/add" exact component={ProjectAdd} />
      <Route path="/experience/add" exact component={ExperienceAdd} />
      <Route path="/project/list" exact component={ProjectsList} />
      <Route path="/experience/list" exact component={ExperienceList} />
      <Route path="/project/update/:id" exact component={ProjectUpdate} />
      <Route path="/experience/update/:id" exact component={ExperienceUpdate} />
      <Route path="/project/delete" exact component={Projectdelete} />
      <Route path="/experience" exact component={Experience} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/contact" exact component={Mailer} />
      <Route path="/contact/crud" exact component={ContactCrud} />
      <Route path="/login" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Router>
  );
}

export default App;
