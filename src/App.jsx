import React from "react"
import { useNavigate } from "react-router-dom"
import "./App.css"

function App() {
  const navigate = useNavigate();

  return (
     <div className="card">
       
         <div className="title ">
          <h1 className="title ">
              Welcome to PopX
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipising elit.
          </p>
         </div>
          <button className="btn-primary" onClick={() => navigate("/create_account")}>Create Account</button>
          <button className="btn-secondary" onClick={()=> navigate("/signInUser")}>Already Registered? Login</button>
       
     </div>
  )
}

export default App