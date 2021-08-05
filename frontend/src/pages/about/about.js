import React, { Component } from "react";
import axios from "axios";
import "./about.css";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
export default class Contacts extends Component {
  constructor(props) {
    super(props);

    // this.deleteAbout = this.deleteAbout.bind(this)

    this.state = { About: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5003/about/")
      .then((response) => {
        this.setState({ About: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // deleteAbout(id) {
  //     axios.delete('http://localhost:5007/create/'+id)
  //       .then(response => { console.log(response.data)});

  //     this.setState({
  //       About: this.state.About.filter(el => el._id !== id)
  //     })
  //   }

  render() {
    return (
      <div>
        <Navbar />
        {/* <p style={{fontSize="1em"}}>{this.state.About && this.state.About[0] && this.state.About[1].title}</h1> */}
     
        {this.state.About &&
          this.state.About.map((item, index) => {
            return (
              <div className="container_about_2">
                <div className="data_about_2">
                  <div className="title_about_2" key={item._id}>
                  
                    <p style={{fontSize:"2.2em"}}>{item.certificate}</p >
                    <h3>{item.certificatedesc}</h3>
                    <p style={{fontSize:"2.2em"}}>{item.profile}</p >
                    <h3>{item.profiledesc}</h3>
                    <p style={{fontSize:"2.2em"}}>{item.languages}</p >
                    <h3>{item.languagesdesc}</h3>
                    <p style={{fontSize:"2.2em"}}>{item.programs}</p >
                    <h3>{item.programsdesc}</h3>
                  </div>
                  <a  href='../components/pdf/Saeed.resume.pdf' download >    <button style={{color:"black"}} type="button6" className="startBtn"> Resume</button></a>
                   
                   
                </div>
                <div className="personal_img_about_2">
                  <img src={`http://localhost:5003/about/about/uploads/${item.image}`} />
                  
                </div>
              </div>
            );
          })}
     
        <Footer />
      </div>
    );
  }
}
