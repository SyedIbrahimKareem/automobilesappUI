import {React,useState} from 'react';


const Url = ()=>{
    const [baseUrl, setBaseUrl]=useState();
    setBaseUrl="https://localhost:44371/";
    const [loginUrl, setLoginUrl]=useState();
    setLoginUrl=baseUrl+"api/auth/login";
    const [registerUrl, setRegisterUrl]=useState();
    setRegisterUrl=baseUrl+"api/User/AddUserDetails";
}
export default Url;