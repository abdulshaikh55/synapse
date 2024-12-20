import { useState } from "react";
import styles from "./SignupLogin.module.css";

const SignupLogin = () => {
  const [signedIn, setSignedIn] = useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <div className={styles.formContent}>
          <p className={styles.welcomeText}>
            {signedIn ? "Welcome back!" : "Welcome!"}
          </p>

          <div className={styles.formGroup}>
            <div
              className={`${styles.inputGroup} ${signedIn ? styles.hide : ""}`}
            >
              <label className={styles.label}>Username</label>
              <input className={styles.input} type="text" required />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Email Address</label>
              <input className={styles.input} type="email" required />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Password</label>
              <input className={styles.input} type="password" required />
              <a
                href="#"
                className={`${styles.forgotPassword} ${
                  !signedIn ? styles.hide : ""
                }`}
              >
                Forget Password?
              </a>
            </div>
            <div
              className={`${styles.inputGroup} ${signedIn ? styles.hide : ""}`}
            >
              <label className={styles.label}>Reenter Password</label>
              <input className={styles.input} type="password" required />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button className={styles.loginButton}>
              {signedIn ? "Login" : "Signup"}
            </button>

            <button className={styles.googleButton}>
              <div className={styles.googleButtonContent}>
                <svg className={styles.googleIcon} viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
                <span className={styles.googleText}>Sign in with Google</span>
              </div>
            </button>
          </div>

          <div className={styles.signupPrompt}>
            <a
              href="#"
              className={styles.signupLink}
              onClick={() => setSignedIn(!signedIn)}
            >
              {signedIn
                ? "Don't have an account yet?"
                : "Already have an account?"}{" "}
              <span className={styles.signupText}>
                {signedIn ? "Sign Up" : "Log In"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLogin;
