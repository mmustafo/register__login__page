import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useRegister } from "../hooks/useRegister";

function Register() {
  const { data, isPending, register } = useRegister(); 
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const displayName = formData.get("displayName");
    const email = formData.get("email");
    const password = formData.get("password");
    register(displayName, email, password);
  }

  return (
    <section>
      <div className="h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="login-register-left-section hidden md:flex"></div>
        <div className="grid place-items-center login-register-left-section md:bg-none">
          <form onSubmit={handleSubmit} className="w-96 max-w-[368px]">
            <h2 className="text-3xl text-center text-white md:text-black mb-5 font-bold">Register</h2>
            <FormInput label="Email:" name="email" type="email"/>
            <FormInput label="Display Name:" name="displayName" type="text" /> 
            <FormInput label="Password:" name="password" type="password" />
            <div className="flex items-center gap-5 mt-8 mb-8">
              <button type="submit" className="btn btn-primary grow" disabled={isPending}>
                {isPending ? "Registering..." : "Register"}
              </button>
              <button type="button" className="btn btn-secondary grow">
                Google
              </button>
            </div>
            <p className="text-center opacity-75 text-white md:text-black">
              If you have an account,
              <Link className="link link-primary" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;