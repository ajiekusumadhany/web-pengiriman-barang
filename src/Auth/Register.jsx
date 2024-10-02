import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import "../assets/css/Register.css";
import ImageRegister from "../assets/img/image-register.png";
import { StyledIcon } from '../components/StyledIcon';
import { faEnvelope, faLock, faPhone, faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ButtonStyle } from "../components/StyledComponents";

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      fullname, 
      username, 
      phone, 
      address, 
      email, 
      password,
    };

    try {
      const response = await axios.post('/api/auth/register', userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 201) {
        Swal.fire({
          title: "Good job!",
          text: response.data.message,
          icon: "success",
          iconColor: "#01aa5a",
          confirmButtonColor:"#01aa5a"
        }).then(() => {
          window.location.href = '/login';
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: "error",
        title: "Register Failed!",
        text: error.response.data.message,
        confirmButtonColor:"#f27474"
    });
    }
  };

  return (
    <div className="register-container">
      <section className="register-box">
        <div className="register-form">
          <form onSubmit={handleSubmit}>
            <center>
              <p>Create an Account</p>

              <label htmlFor="fullname">
                <StyledIcon icon={faUser} size="lg" color="black" />
                Fullname<span className="text-danger">*</span>  
              </label>
              <input type="text" placeholder="Your fullname" value={fullname} onChange={handleFullnameChange} required autoFocus/>

              <label htmlFor="username">
                <StyledIcon icon={faUser} size="lg" color="black" />
                Username<span className="text-danger">*</span>  
              </label>
              <input type="text" placeholder="Your username" value={username} onChange={handleUsernameChange} required/>

              <label htmlFor="phone">
                <StyledIcon icon={faPhone} size="lg" color="black" />
                Phone Number<span className="text-danger">*</span>  
              </label>
              <input type="number" placeholder="Your active phone number" value={phone} onChange={handlePhoneChange} required/>

              <label htmlFor="email">
                <StyledIcon icon={faEnvelope} size="lg" color="black" />
                Email<span className="text-danger">*</span>  
              </label>
              <input type="email" placeholder="Email address" value={email} onChange={handleEmailChange} required/>

              <label htmlFor="address">
                <StyledIcon icon={faLocationDot} size="lg" color="black" />
                Address<span className="text-danger">*</span>  
              </label>
              <textarea placeholder="Your address" value={address} onChange={handleAddressChange} required></textarea> 

              <label htmlFor="password">
                <StyledIcon icon={faLock} size="lg" color="black" />
                Password<span className="text-danger">*</span>  
              </label>
              <input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} required/>

              <ButtonStyle type="submit" style={{ padding: '10px 90px', margin: '10px auto', maxWidth: '440px', width: '100%' }}>
                <b>Sign up</b>
              </ButtonStyle>
              <p className="no-account">Already have an account?<Link to="/login" className="sign-up-link"><b> Sign in.</b></Link></p>
            </center>
          </form>
        </div>
      
        <div className="right-grid">
          <div className="register-img">
            <p className="welcome"><b>Let's Join Us!</b></p>
            <p className="welcome-sub">To connect with us, please login with your personal info.</p>
            <img src={ImageRegister} alt="Welcome" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
