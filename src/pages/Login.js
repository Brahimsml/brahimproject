import { useAuth } from "../Components/AuthContext";
import LoginForm from "../Components/LoginForm";


function Login() {
  const { user, logout } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default Login;