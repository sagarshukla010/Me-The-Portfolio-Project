import React, { useState } from "react";
import "./ContactMe.css";
import imgBack from "../../images/mailz.jpeg";
import load1 from "../../images/load2.gif";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import BottomFooter from "./bottomFooter/BottomFooter";
import axios from "axios";
import { toast } from "react-toastify";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    if (!userName || !email || !message) {
      toast.error("Please fill all fields.");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post(
        `https://me-the-portfolio-project-backend.onrender.com/contact`,
        { userName, email, message }
      );
      setBanner(res.data.msg);
      toast.success(res.data.msg);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="main-container" id={props.id || ""}>
        <ScreenHeading title="Contact Me" subHeading="Let's Keep In Touch" />
        <div className="central-form">
          <div className="col">
            {/* <h2>Connect with me</h2> */}
            <a href="https://github.com/sagarshukla010" aria-label="GitHub">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.youtube.com/@sagarshukla1194" aria-label="YouTube">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/in/sagar-shukla-b517b416a/" aria-label="LinkedIn">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <div className="back-form">
            <div className="img-back">
              {/* <h4>Send Your Email Here!</h4> */}
              <img src={imgBack} alt="Background" />
            </div>
            <form onSubmit={submitForm}>
              <p>{banner}</p>
              <label htmlFor="userName">Name</label>
              <input
                type="text"
                id="userName"
                onChange={(e) => setName(e.target.value)}
                value={userName}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />

              <div className="send-btn">
                <button type="submit" disabled={loading}>
                  Send <i className="fa fa-paper-plane" />
                  {loading && (
                    <b className="load">
                      <img src={load1} alt="Loading..." />
                    </b>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <BottomFooter />
    </div>
  );
}