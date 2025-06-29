import Home from "../meContainer/home/Home";
import Aboutme from "../meContainer/aboutMe/Aboutme";
import Resume from "../meContainer/resume/Resume";
import Testimonial from "../meContainer/testimonial/Testimonial";
import ContactMe from "../meContainer/contactMe/ContactMe";
import Research from "../meContainer/research/Research";
import Projects from "../meContainer/projects/Projects"
import Skills from "../meContainer/skills/Skills"
import Education from "../meContainer/experience/Education";
// import Certifications from "../meContainer/certifications/Certifications"

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
    screen_name: "Skills",
    component: Skills,
  },
  {
    screen_name: "Projects",
    component: Projects,
  },
  {
    screen_name: "Education",
    component: Education
  },
  {
    screen_name: "Research",
    component: Research,
  },
  // {
  //   screen_name: "Certifications",
  //   component: Certifications,
  // },
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
