import { useState } from "react";
import '../styles/login.css'
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { secret } from "../Security/secrets";
import { Button } from "antd";
// import { secret } from "../styles/Security/secrets";

const firebaseConfig = secret

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const connectAuth = async () => {
    // connect to firebase project
    const app = initializeApp(firebaseConfig);
    // connect to Auth
    return getAuth(app);
  };
  const navigate = useNavigate();

  const handleLogin = async () => {
    const auth = await connectAuth();
    const user = await signInWithEmailAndPassword(auth, email, password).catch(
      (err) => alert(err.message)
    );
    if (user) {
      console.log(user.user);
      setIsLoggedIn(true);
      navigate('/MechPage');
      localStorage.setItem('user', user.user)

    }
  };
  

  const handleGoogleLogin = async () => {
    const auth = await connectAuth();
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider).catch((err) =>
      alert(err.message)
    );
    if (user) {
      console.log(user.user);
      setIsLoggedIn(true);
      navigate('/MechPage')

    }
  };

  const handleSignUp = async () => {
    const auth = await connectAuth();
    // send email and password to firebase auth
    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((err) => alert(err.message));
    // if all ok..
    if (user) {
      console.log(user)
      setIsLoggedIn(true);
    }
    // if error

    // popup error
  };

  return (
    <body className="body-login">
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="email">
        Email:
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
        />
      </label>
      <br />
      <Button onClick={handleLogin}>Login</Button>&nbsp;
      <Button onClick={handleSignUp}>Sign Up</Button>
      <br />
      <Button onClick={handleGoogleLogin}>Login with Google</Button>
    </form>
    </body>
  );
}

export default Login;
