import React, { Component } from "react";
import axios from "axios";
import "./login.css";

export default class Home extends Component {
  // constructor(props) {
  //   super(props);

  // this.onChangeUsername = this.onChangeUsername.bind(this);
  // this.onChangePassword = this.onChangePassword.bind(this);
  // this.state = {
  //   username: "",
  //   password: "",
  // };
  // }

  // componentDidMount() {
  //   this.setState({
  //     username: "",
  //     password: "",
  //   });
  // }
  LogIN = async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const result = await fetch("http://localhost:5003/login/dash", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => res.json());
    if (result.status === "okay") {
      localStorage.setItem(
        "login",
        JSON.stringify({
          token: result.data,
        })
      );
      this.props.history.push("/dashboard");
    }
  };
  // onChangeUsername(e) {
  //   this.setState({
  //     username: e.target.value,
  //   });
  // }

  // onChangePassword(e) {
  //   this.setState({
  //     password: e.target.value,
  //   });
  // }

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   const admin = {
  //     username: this.state.username,
  //     password: this.state.password,
  //   };

  //   axios
  //     .post("http://localhost:5003/login/dash", admin)
  //     .then((res) => console.log(res.data));
  //   // window.location =
  // };

  render() {
    return (
      <div>
        <div class="wrapper_login fadeInDown">
          <div id="formContent_login">
            <h2 class="active"> Sign In </h2>

            <form onSubmit={this.LogIN}>
              <input
                type="text_6"
                id="username"
                class="fadeIn second"
                name="username"
                placeholder="username"
                onChange={this.onChangeUsername}
              />
              <input
                type="password"
                id="password"
                class="fadeIn third"
                name="password"
                placeholder="password"
                onChange={this.onChangePassword}
              />
                  <input type="submit" class="fadeIn fourth" value="Log In" />
            </form>

            <div id="formFooter">
              <a class="underlineHover" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
