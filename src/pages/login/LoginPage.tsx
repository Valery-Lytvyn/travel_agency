import LoginForm from "../../components/loginForm/LoginForm";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

function LoginPage() {
  return (
    <section className="section">
      <SectionTitle title="Login" />
      <LoginForm />
    </section>
  );
}

export default LoginPage;
