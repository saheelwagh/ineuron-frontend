import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle, logout } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function LoginPage(){
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/user");
  }, [user, loading]);
    return(
        <div className="login-buttons grid place-items-center h-screen">
            <div className="login-creator">
            <button onClick={signInWithGoogle}
             className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                User Login
            </button>
            </div>
            <div className="login-creator">
            <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        
            <button
             className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Creator  Login
            </button>
            </div>
            
        </div>
        
    )
}
export default LoginPage