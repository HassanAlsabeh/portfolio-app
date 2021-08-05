
import ExperienceCard from "./ExperienceCard"
import React, { Component } from "react";
import Navbar from "../../components/navbar/navbar";  
import Footer from "../../components/footer/footer"; 
export default class Experience extends Component {
  render() {
  return (
    <div >
      <Navbar />
      <ExperienceCard/>
      <Footer />
  </div>
  );
};}