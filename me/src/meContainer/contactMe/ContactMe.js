import React, { useState } from "react";
import "./ContactMe.css";
import Typical from "react-typical";
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
  // const fadeInSubscription =
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        userName,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(
        `https://me-the-portfolio-project-backend.onrender.com/contact`,
        data
      );
      if (userName.length === 0 || email.length === 0 || message.length === 0) {
        console.log("The response from backend: ", res);
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        console.log("The response from backend: ", res);
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log("error occured: ", error);
    }
  };

  return (
    <div>
      <div className="main-container" id={props.id || ""}>
        <ScreenHeading title={"Contact Me"} subHeading={"Lets Keep In Touch"} />
        <div className="central-form">
          <div className="col">
            <h2>
              {" "}
              <Typical loop={Infinity} steps={["Get In Touch ☎️", 2000]} />
            </h2>
            <a href="https://github.com/sagarshukla010">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.youtube.com/@sagarshukla1194">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/in/sagar-shukla-b517b416a/">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <div className="back-form">
            <div className="img-back">
              <h4>Send Your Email Here!</h4>
              <img src={imgBack} alt="imageP not found" />
            </div>
            <form onSubmit={submitForm}>
              <p>{banner}</p>
              <label htmlFor="userName">Name</label>
              <input type="text" onChange={handleName} value={userName} />

              <label htmlFor="email">Email</label>
              <input type="text" onChange={handleEmail} value={email} />

              <label htmlFor="message">Message</label>
              <textarea type="text" onChange={handleMessage} value={message} />

              <div className="send-btn">
                <button type="submit">
                  send <i className="fa fa-paper-plane" />
                  {bool ? (
                    <b className="load">
                      <img src={load1} alt="imageP not responding"></img>
                    </b>
                  ) : (
                    ""
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
