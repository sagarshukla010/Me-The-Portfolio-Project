// import React, { useEffect, useState } from "react";
import React from "react";
import "./Testimonial.css";
// import axios from "axios";
import data from "../../data.json"
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import GauravImage from "../../assets/Testimonial/GauravSmall.png";
import padmaImage from "../../assets/Testimonial/padmaImage.jpeg";
import mugunthanImage from "../../assets/Testimonial/MugunthanPic.jpeg";

export default function Testimonial(props) {

  // const [testimonial, setTestimonial] = useState(null);

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // const fadeInSubscription =
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post(
  //         "https://me-the-portfolio-project-backend.onrender.com/fetchUserDetails", {},
  //         {
  //           params: {
  //             userId: "admin",
  //             db: "testimonial",
  //           },
  //         }
  //       )
  //       console.log("response for testimonials: ", response);
  //       let responseObj;
  //       if(response?.status === 200){
  //         responseObj = response?.data?.response;
  //       }else{
  //         responseObj = {};
  //       }
  //       setTestimonial(responseObj);
  //     } catch (error) {
  //       console.error("error: ",error)
  //     }
  //   };

  //   fetchData();
  // }, []);

  let imgAry = [GauravImage, mugunthanImage, padmaImage];

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animationIn: "bounceInRight",
    animationOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Recommendation"}
        subHeading={"What my collagues and friends say about me"}
      />
      <section className="testimonial-section" id={props?.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              {data?.testimonial?.peopleDetails?.map((pD) => (
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        {pD?.recommendationGiven}
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                      <img
                        src={imgAry[pD?.serialNumber]}
                        alt="no internet connection"
                      />
                      <h5>{pD?.name}</h5>
                      <p>{pD?.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img
          src={require("../../assets/Home/shape-bg.png")}
          alt="no.. internet connection"
        />
      </div>
    </div>
  );
}
