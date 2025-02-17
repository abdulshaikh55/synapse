import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <p>
        Synapse is a Learning Management System that recommends courses based on
        user's interests, and similarity to other users.
      </p>
      <p>
        With this project, we hope to engineer a Learning Management System that
        delivers a personalized experience to students with the help of
        Recommendation System algorithms. This proposed recommendation system
        will enhance the learning experience by providing personalized
        suggestions tailored to individual user profiles such as relevant
        courses and modules, news, and important articles that align with users'
        career goals and interests.
      </p>
      <p>
        {" "}
        This is a final year project developed by the students of Dr. J. J.
        Magdum College of Engineering. The five students are (in alphabetical
        order) Desai Digvijay, Kulkarni Sharwari, Magdum Mahaveer, Mali
        Vrushali, and Shaikh Abdulfaiz.{" "}
      </p>
      <p>
        The central idea of this project is how machine learning, specifically
        recommendation systems can help students in focusing on their interests
        rather than external noise of overinformation and overcourses.
      </p>

      <p>Check out the code at the <a href="https://www.github.com/abdulshaikh55/synapse">GitHub</a> repo!</p>
    </div>
  );
};

export default About;
