import Registration from "./folder/Registration";
import {useState} from "react";


function App() {
  const [emailAddress, setEmailAddress] = useState ("");
  const [password, setPassword] = useState ("");

  const handleSubmit = () => {
    const data = {
      emailAddress,
      password
    }
    console.log(data) 

    if (emailAddress.trim().length === 0 && password.trim().length === 0) {
      return alert ('შეავსე ყველა ველი')
    }

    if (password.length < 8) {
      return alert ('მაქსიმუმ რვა სიმბოლოა საჭირო')
    }
  }

  console.log({emailAddress})
  console.log({password})
  return (
    <div className="App">
      <Registration />
      <input type="email" name="Email address" placeholder="Email address" onChange={(e) => setEmailAddress(e.target.value)} className="first-input"/>
      <input type="password" name="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="second-input"/>
      <button onClick={handleSubmit}>create accaunt</button>
    </div>
  );
}

export default App;
