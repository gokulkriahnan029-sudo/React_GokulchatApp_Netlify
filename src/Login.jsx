import { useState } from "react";
import "./Loginstyle.css"
import { useNavigate } from "react-router-dom";

const Login = ({setvalidNumber,setvalidname}) => {

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[0-9]{10}$/.test(number)) {
      setError("⚠️ Please enter a valid number.");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      setError("⚠️ Please enter a valid name.");
      return;
    }

    setError("");
    alert(`✅ Logged in as ${name} (${number})`);
    setvalidNumber(number)
    setvalidname(name)
    navigate('/e')

  };

return(
   <main>

    <div className="login-container">
      <div className="login-box">
        <h2>Gokul ChatApp Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit">Continue</button>
        </form>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
   </main>
)
}

export default Login;