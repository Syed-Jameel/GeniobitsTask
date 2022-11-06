import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container}>
            <h3>Login to Your Account</h3>
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
            <Link to="/myapp">
              <button type="submit" className={styles.green_btn}>
                Sing In
              </button>
            </Link>
          </form>
        </div>
        <div className={styles.right}>
          <h2>New Here ?</h2>
          <Link to="/GeniobitsTask">
            <button type="button" className={styles.white_btn}>
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
