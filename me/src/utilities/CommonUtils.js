import Home from "../meContainer/home/Home";
import Aboutme from "../meContainer/aboutMe/Aboutme";
import Resume from "../meContainer/resume/Resume";
import Testimonial from "../meContainer/testimonial/Testimonial";
import ContactMe from "../meContainer/contactMe/ContactMe";

export const TOTAL_SCREEN = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "Aboutme",
    component: Aboutme,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  {
    screen_name: "Testimonial",
    component: Testimonial,
  },
  {
    screen_name: "ContactMe",
    component: ContactMe,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREEN.length; i++) {
    if (screen_name === TOTAL_SCREEN[i].screen_name) {
      return i;
    }
  }
  return -1;
};
