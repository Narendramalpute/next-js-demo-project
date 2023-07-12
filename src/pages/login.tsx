import React,{useState} from 'react'
import Layout from '../layout/Layout';
import styled from 'styled-components';
import { useRouter } from 'next/router'

const login = () => {
    
    const router = useRouter()
    interface IUser {
      email: string;
      password: any;
    }
    interface UserValidation {
      emailVal: string;
      passwordVal: String;
    }
    const [loginData, setLoginData] = useState<IUser>({
      email: "",
      password: "",
    });
    const [validation, setValidation] = useState<UserValidation>({
      emailVal: "",
      passwordVal: "",
    });
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginData((prevdata) => ({
        ...prevdata,
        [e.target.name]: e.target.value,
      }));
      if(e.target.name == "email"){
        setValidation((prevdata)=>({
          ...prevdata,
          emailVal:"",
        }))
      }
      if(e.target.name == "password"){
        setValidation((prevdata)=>({
          ...prevdata,
          passwordVal:"",
        }))
      }
    };
    const handleValidation = ()=>{
      const validations = {
        emailVal: "",
        passwordVal: "",
      };
      let isValid = true;
      if(!loginData.email.trim()){
        isValid = false;
        validations.emailVal = "Email is Compulsory";
      }
      else{
        validations.emailVal = "";
      }
      if(!loginData.password.trim()){
        isValid = false;
        validations.passwordVal = "Email is Compulsory";
      }
      else{
        validations.passwordVal = "";
      }
  
      setValidation(validations)
      return isValid;
    }
    
    const handleSubmit = () => {
      let isValid = handleValidation()
      if(!isValid){
        return false
      }
      console.log(loginData);
      if(loginData.email == "narendra.malpute@brainvire.com" && loginData.password == "123"){
        router.push('/product')
        localStorage.setItem("loginVal",JSON.stringify(true))
      }
      else{
        router.push('/login')
      }
    };
  
const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
`;

const FormHeading = styled.h2`
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
  return (
    <Layout>
      <LoginPageWrapper>
      <LoginFormWrapper>
        <FormHeading>Login</FormHeading>
        <FormInput type="email" value={loginData.email}
          name="email"
          onChange={(e:any) => handleOnChange(e)} placeholder="Username" />
           <span>{validation.emailVal}</span>
        <FormInput type="password" placeholder="Password"
         name="password"
          value={loginData.password}
          onChange={(e:any) => handleOnChange(e)} />
          <span>{validation.passwordVal}</span>
        <FormButton onClick={handleSubmit} >Login</FormButton>
      </LoginFormWrapper>
    </LoginPageWrapper>
    </Layout>
  )
}

export default login
