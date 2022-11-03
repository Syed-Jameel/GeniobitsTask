import { Link} from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <img src="logo.png" alt="logo"/>
          <h2>Welcome Back</h2>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sing in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container}>
            <h4>Create Account</h4>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              className={styles.input}
            />
            <Link to="/login">
              <button type="submit" className={styles.green_btn}>
                Sing Up
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
