import c1_img from './course_img1.jpg';
import c2_img from './course_img2.jpg';
import c3_img from './course_img3.jpg';
import c4_img from './course_img4.jpg';
// import c5_img from './course_img5.jpg';
// import c6_img from './course_img6.jpg';

let popular_courses = [
  {
    id: 1,
    name: "Machine Learning In Python Environment",
    image: c1_img,
    tags: ["machine_learning", "introduction", "beginner", "artificial_intelligence", "python", "scikit-learn"],
    pricing: "free",
    certificate_included: true,
    provider: "alison.com",
    url: "https://alison.com/course/machine-learning-in-python-environment?utm_source=bing&utm_medium=cpc&utm_campaign=531498933&utm_content=1364496467604159&utm_term=kwd-85282193802026:loc-90&msclkid=ef7e6e5a7f4b12d44842090774b25107"
  },
  {
    id: 2,
    name: "Web Development Bootcamp",
    image: c2_img,
    tags: ["web_development", "full_stack", "beginner", "html", "css", "javascript"],
    pricing: "free",
    certificate_included: false,
    provider: "freecodecamp.org",
    url: "https://www.freecodecamp.org/learn/responsive-web-design/"
  },
  {
    id: 3,
    name: "Data Science with R",
    image: c3_img,
    tags: ["data_science", "r", "statistics", "beginner"],
    pricing: "paid",
    certificate_included: true,
    provider: "coursera.org",
    url: "https://www.coursera.org/learn/data-science-r"
  },
  {
    id: 4,
    name: "Introduction to Cybersecurity",
    image: c4_img,
    tags: ["cybersecurity", "introduction", "beginner"],
    pricing: "free",
    certificate_included: true,
    provider: "edx.org",
    url: "https://www.edx.org/course/introduction-to-cybersecurity"
  }
]

export default popular_courses;