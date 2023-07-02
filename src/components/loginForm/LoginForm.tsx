import TextButton from "../../components/textButton/TextButton";
import "./loginForm.scss";

function LoginForm() {
  return (
    <div className="section_card">
      <form className="login_form">
        <input
          type="email"
          className="login_form_input"
          placeholder="Enter your login"
        />
        <input
          type="password"
          className="login_form_input"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <TextButton text="login now" />
        <div className="checkbox_wrap">
          <input type="checkbox" name="remember_me" id="remember_me" />
          <label htmlFor="remember_me" className="remember_label">
            remember me
          </label>
        </div>
      </form>
      <div className="login_questions">
        <div className="question">
          <p>forgot your password?</p>
          <span className="question_link">click here</span>
        </div>
        <div className="question">
          <p>don't have an account?</p>
          <span className="question_link">click here</span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
