import React, { useState,useRef,useContext } from "react";
import './LoginSignup.css'
import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'
import axios from 'axios'
import {useAlert} from '../Alert/AlertContext'
import CustomAlert from '../Alert/CustomAlert'
const LoginSignup = () => {
    const{ alertMessage, showAlert, hideAlert } = useAlert();
    const[action, setAction] = useState("Sign Up");
    const[actionSubmit, setSubmit]=useState("Submit");
    const[success,useSuccess]=useState(false);
    const[username,setUserName]=useState("");
    const[email,setEmail]=useState("");
    const userRef=useRef();
    const[password,setPassword]=useState("");
    const handleUserNameChange=(value)=>{
        setUserName(value)
    };
    const handleEmailChange=(value)=>{
        setEmail(value)
    };
    const handlePasswordChange=(value)=>{
        setPassword(value)
    };
//      const [, setAlertContext] = useAlert();
//   const showAlert = (type) => {
//     setAlertContext({
//       text: "Invalid username or password",
//       type,
//     });
//   };
    const handlesSubmitLoginSignup=()=>{
        const loginData={
            userName:username,
            password:password
        }
        const RegisterData={
            userName:username,
            password:password,
            userEmail:email
        }

        const loginurl='https://localhost:44371/api/auth/login'
        const registerUrl='https://localhost:44371/api/User/AddUserDetails'
        if(action=='Login'){
        axios.post(loginurl,loginData).then((result)=>{
            debugger;
            if(result.data.isSuccess==true){
                const tokenKey= result.data.data.token;
                const refreshTokenKey= result.data.data.RefreshToken;
                setEmail("");
                setUserName("");
                setPassword("");
                showAlert('Logged in Successfully...');
            }
            else{
                //alert('Username or Password is incorrect..')
                showAlert('Username or Password is incorrect...')
            }
        })
    }
    else{
        axios.post(registerUrl,RegisterData).then((result)=>{
            debugger;
            if(result.data.isSuccess==true){
                setEmail("");
                setUserName("");
                setPassword("");
                showAlert('Regisetered successfully, Please login now');
                setAction("Login");
            }
            else{
                showAlert('username or email id is already exists...')
            }

        })
    }
    }
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> :
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" id="txtName" placeholder="Email"  onChange={(e)=>handleEmailChange(e.target.value)}/>
                    </div>
                }

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="name" placeholder="User Name" onChange={(e)=>handleUserNameChange(e.target.value)} required/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" onChange={(e)=>handlePasswordChange(e.target.value)}required/>
                </div>
            </div>
            {action === "Sign Up" ? <div></div> :
                <div className="forgot-password">Forgot Password? <span>Click Here</span></div>
            }

            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
            <div className="submitbtn">
                <button onClick={()=> handlesSubmitLoginSignup()} className="submitlogsign">Submit</button>
            </div>
            {alertMessage && <CustomAlert message={alertMessage} onClose={hideAlert} />}
        </div>
    )
}
export default LoginSignup