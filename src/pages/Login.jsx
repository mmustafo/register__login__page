import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const { data, isPending, login } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    login(email, password);
  }

  return (
    <section className="max-w-[1200px]">
      <div className="h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="login-register-left-section hidden md:flex"></div>
        <div className="grid place-items-center login-register-left-section md:bg-none">
          <div className="absolute left-0 top-0 bottom-0 w-full bg-black opacity-50 z-10 md:hidden"></div>
          <form onSubmit={handleSubmit} className="w-96 relative z-20 max-w-[386px]">
            <h2 className="text-3xl text-center mb-5 font-bold text-white md:text-black">
              Login
            </h2>
            <FormInput label="Email:" name="email" type="email" />
            <FormInput label="Password:" name="password" type="password" />
            <div className="flex items-center gap-5 mt-8 mb-8">
              <button type="submit" className="btn btn-primary grow">
                {isPending ? "Logging in..." : "Login"}
              </button>
              <button type="button" className="btn btn-secondary grow">
                Google
              </button>
            </div>
            <p className="text-center opacity-75 text-white md:text-black">
              If you don't have an account
              <Link className="link link-primary" to="/register">
                {" "}
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
