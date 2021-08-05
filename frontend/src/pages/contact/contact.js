import "./contact.css";
import Navbar from "../../components/navbar/navbar";
import emailjs from "emailjs-com";

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5l7kh0n",
        "template_gx7wc6r",
        e.target,
        "user_MwbDvlvwreTZP8lUuL6jE"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  // export default class Contacts extends Component{
  // render(){
  return (
    <div className="Contacts">
       <Navbar />
      <section id="contact">
        <h1 className="section-header">Contact</h1>

        <div className="contact-wrapper">
          <form
            id="contact-form"
            className="form-horizontal"
            role="form"
            onSubmit={sendEmail}
          >
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="user_email"
                  required
                />
              </div>
            </div>

            <textarea
              className="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button
              className="btn btn-primary send_button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="alt-send_button">
                <i className="fa fa-paper-plane"></i>
                <span className="send_text7">SEND</span>
              </div>
            </button>
          </form>

          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <i className="fa fa-map-marker fa-2x">
                  <span style={{fontSize:"0.7em"}} className="contact-text7 place">Beirut, Lebanon</span>
                </i>
              </li>

              <li className="list-item">
                <i className="fa fa-phone fa-2x">
                  <span className="contact-text7 phone">
                    <a style={{fontSize:"1.5em",marginLeft:"30px"}}
                      href="https://api.whatsapp.com/send/?phone=%2B96171563884&text&app_absent=0"
                      title="Give me a call"
                    >
                      +961 71 563 884
                    </a>
                  </span>
                </i>
              </li>

              <li className="list-item">
                <i className="fa fa-envelope fa-2x">
                  <span className="contact-text7 gmail">
                    <a href="# " title="Send me an email" style={{fontSize:"1.5em"}}>
                      saeed.el.jurdi@gmail.com{" "}
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <ul className="social-media-list">
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/saeed-el-jurdi"
                target="_blank"
                className="contact-icon"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>

              <a
                href="https://www.facebook.com/sjurdy"
                target="_blank"
                className="contact-icon"
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>

              <a
                href="https://instagram.com/jurdi.saeed?utm_medium=copy_link"
                target="_blank"
                className="contact-icon"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </ul>

            <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mailer;
