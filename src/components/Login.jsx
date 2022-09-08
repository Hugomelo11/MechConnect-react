import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
// import { secret } from "../styles/Security/secrets";

const firebaseConfig = {
    apiKey: "AIzaSyAq9hjfwhxUVxZ7RiYSsu9RNgRqcGe_q1U",
    authDomain: "mechconnectapi.firebaseapp.com",
    projectId: "mechconnectapi",
    storageBucket: "mechconnectapi.appspot.com",
    messagingSenderId: "21327002361",
    appId: "1:21327002361:web:32b1ac57cd95e627ae0028"
  };
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
      navigate('/MechPage')

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
      console.log(user);
      setIsLoggedIn(true);
    }
    // if error

    // popup error
  };

  return (
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
      <button onClick={handleLogin}>Login</button>&nbsp;
      <button onClick={handleSignUp}>Sign Up</button>
      <br />
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </form>
  );
}

export default Login;
