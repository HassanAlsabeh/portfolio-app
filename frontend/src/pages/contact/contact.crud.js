import React, { Component } from "react";
import axios from "axios";
import "./contact.crud.css";
import Dashboard from "../dashboard/dashboard";
export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeInstagram = this.onChangeInstagram.bind(this);
    this.onChangeFacebook = this.onChangeFacebook.bind(this);
    this.onChangeLinkedin = this.onChangeLinkedin.bind(this);
    this.onChangeWhatsapp = this.onChangeWhatsapp.bind(this);
    this.onChangeGithub = this.onChangeGithub.bind(this);
    this.state = {
      Phone: "",
      Email: "",
      Instagram: "",
      Facebook: "",
      Linkedin: "",
      Whatsapp: "",
      Github: "",
    };
  }

  componentDidMount() {
    this.setState({
      Phone: "",
      Email: "",
      Instagram: "",
      Facebook: "",
      Linkedin: "",
      Whatsapp: "",
      Github: "",
    });
  }

  onChangePhone(e) {
    this.setState({
      Phone: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      Email: e.target.value,
    });
  }

  onChangeInstagram(e) {
    this.setState({
      Instagram: e.target.value,
    });
  }

  onChangeFacebook(e) {
    this.setState({
      Facebook: e.target.value,
    });
  }

  onChangeLinkedin(e) {
    this.setState({
      Linkedin: e.target.value,
    });
  }
  onChangeWhatsapp(e) {
    this.setState({
      Whatsapp: e.target.value,
    });
  }

  onChangeGithub(e) {
    this.setState({
      Github: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      Phone: this.state.Phone,
      Email: this.state.Email,
      Instagram: this.state.Instagram,
      Facebook: this.state.Facebook,
      Linkedin: this.state.Linkedin,
      Whatsapp: this.state.Whatsapp,
      Github: this.state.Github,
    };

    console.log(exercise);
    axios
      .put(
        "http://localhost:5003/contact/update/60e840c1dcd8407c90643d63",
        exercise
      )
      .then((res) => console.log(res.data));
    // window.location =
  };

  render() {
    return (
      <div className="container_project">
       <Dashboard/>
        <form onSubmit={this.onSubmit} id="contact_project">
        <h3>Creat new data</h3>
          <div>
            <label>Phone</label>
            <input
              type="text_2"
              placeholder="Phone"
              tabindex="1"
              required
              value={this.state.Phone}
              onChange={this.onChangePhone}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text_2"
              tabindex="2"
              placeholder="Email"
              required
              value={this.state.Email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div>
            <label>Instagram</label>
            <input
              type="text_2"
              placeholder="Instagram"
              tabindex="3"
              required
              value={this.state.Instagram}
              onChange={this.onChangeInstagram}
            />
          </div>
          <div>
            <label>Facebook</label>
            <input
              type="text_2"
              placeholder="Facebook"
              tabindex="4"
              required
              value={this.state.Facebook}
              onChange={this.onChangeFacebook}
            />
          </div>
          <div>
            <label>Linkedin</label>
            <input
              type="text_2"
              tabindex="5"
              placeholder="LinkedIn"
              required
              value={this.state.Linkedin}
              onChange={this.onChangeLinkedin}
            />
          </div>
          <div>
            <label>Whatsapp</label>
            <input
              type="text_2"
              placeholder="Whatsapp"
              tabindex="6"
              required
              value={this.state.Whatsapp}
              onChange={this.onChangeWhatsapp}
            />
          </div>
          <div>
            <label>Github</label>
            <input
              type="text_2"
              tabindex="7"
              placeholder="Github"
              required
              value={this.state.Github}
              onChange={this.onChangeGithub}
            />
          </div>

          <div>
          <button
            name="submit_2"
            type="submit_2"
            id="contact-submit_2"
            data-submit_2="...Sending"
          >Update Contacts</button>
          </div>
        </form>
      </div>
    );
  }
}
