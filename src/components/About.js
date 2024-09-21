import React, { useState, useRef } from "react";
import {Link} from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function About(props) {
    const [firstName, setFirst_name] = useState('');
    const [lastName, setLast_name] = useState('');
    const [u_email, setEmail] = useState('');
    const [u_number, setNumber] = useState('');
    const [u_message, setMessage] = useState('');

    const changeFirstName= (event) => {
        setFirst_name(event.target.value)
    }
    const changeLastName= (event) =>{
        setLast_name(event.target.value)
    }
    const changeEmail= (event) =>{
        setEmail(event.target.value)
    }
    const changeNumber= (event) =>{
        setNumber(event.target.value)
    }
    const changeMessage= (event) =>{
        setMessage(event.target.value)
    }
    
    const handleClearText = () =>{
        if (!firstName && !lastName && !u_email && !u_number && !u_message) {
            props.showAlert('Fill the form first','warning');
        }else{
            setFirst_name('');
            setLast_name('');
            setEmail('');
            setNumber('');
            setMessage('');
            props.showAlert('Text cleared successfully', 'success');
        }
    }

    const form = useRef();
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs
            .sendForm('service_3b9p92l', 'template_tjinwux', form.current, 'yortmtz9-HFdKHUu_')
            .then(
                (result)=>{
                    props.showAlert('Form submitted successfully','success');
                    setFirst_name('');
                    setLast_name('');
                    setEmail('');
                    setNumber('');
                    setMessage('');
                },
                (error)=>{
                    props.showAlert('Form submission unsuccessfull','warning');
                }
            );
    };
    const handleDownload=()=>{
        props.showAlert('Resume downloaded successfully','success')
    }

    return(
    <>
        <div className="sidebar">
            <ul className="social-icons">
                <li><Link className="link" to="https://www.instagram.com/_sheikh_z_11"><i className="fab fa-instagram"></i></Link></li>
                <li><Link className="link" to="https://www.linkedin.com/in/afthab-sheikh11710"><i className="fab fa-linkedin"></i></Link></li>
                <li><Link className="link" to="https://www.facebook.com/afthab.sheikh.58"><i className="fab fa-facebook"></i></Link></li>
                <li><Link className="link" to="https://www.github.com/afthabsheikh"><i className="fab fa-github"></i></Link></li>
                <li><Link className="link" to="https://www.snapchat.com/add/afthab_sheikh11"><i className="fab fa-snapchat"></i></Link></li>
            </ul>        
        </div>
        <div className="profile-info-container">
            <div className="blurred-box">
                <div className="content">
                    <h2 className="intro"> <br /><strong className="Name-change" style={{color:'orange',textTransform:'none',textShadow:'2px 2px 2px teal'}} /* ref={props.AboutNameRef} */>{props.currentName}</strong> <br/>
                    Full Stack Developer</h2>
                    <img className="profile-img" src="images/BitmojiSnap.png" alt="MyProfileAnimation" />
                </div>
            </div>
        </div>
        <div className="about-section">
            <p className="about-start">Want to know about me?</p>
            <p className="about-intro">Hello! I am <span style={{color:'orange'}}>Afthab Sheikh</span> a passionate and driven BCA graduate with a strong foundation in web development, python development and a keen interest in technology. Throughout my journey, I have honed my skills in Python, Django, React, and other modern web technologies, striving to build efficient and user-friendly applications. With hands-on experience in frontend and backend development, I've developed projects like a classroom app and an attendance system, showcasing my ability to solve problems and deliver impactful solutions.</p>
            <p className="about-intro">As a quick learner and a dedicated developer, <br/>I constantly expand my knowledge to stay ahead in the ever-evolving tech landscape. My goal is to create innovative and scalable applications that enhance user experiences and make a real-world impact.
                When I’m not coding, I enjoy exploring new tech trends, contributing to open-source projects, and learning new tools that can elevate my development skills. I’m excited to collaborate on meaningful projects and bring ideas to life through code.</p><br/>
            <p className="about-intro">Let’s connect and create something amazing together!</p>
        </div>
        <div className="my-resume">
            <p>Find my resume here</p>
            <a href="Files/afthabResume.pdf" download="Afthab-Resume.pdf"><input type="button" value="My Resume" onClick={handleDownload} className="resume-btn" /></a>
        </div>
        <h1 className="form-text">Want to share something with me? Feel free</h1>
        <form ref={form} onSubmit={sendEmail} method="POST" className="form">
            <div className="form-group mb-2">
                <label htmlFor="exampleFormControlInput1">First name</label>
                <input type="text" className="form-control" name="firstName" value={firstName} onChange={changeFirstName} placeholder="First name" required/>
            </div>
            <div class="form-group mb-2">
                <label htmlFor="exampleFormControlInput1">Last name</label>
                <input type="text" className="form-control" name="lastName" value={lastName} onChange={changeLastName} placeholder="Last name"/>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" name="u_mail" value={u_email} onChange={changeEmail} id="exampleFormControlInput1" placeholder="name@example.com" required/>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="exampleFormControlInput1">Contact number</label>
                <input type="phone" className="form-control" name="u_number" value={u_number} onChange={changeNumber} id="exampleFormControlInput1" placeholder="eg . 00000 00000"/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="exampleFormControlTextarea1">Feedback</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name="u_message" rows="3" value={u_message} onChange={changeMessage} required></textarea>
            </div>
            <button type="submit" class="btn btn-primary custom-hover mb-3">Submit</button>
            <button type="button" class="btn btn-primary custom-hover" onClick={handleClearText}>Clear</button>
        </form>
    </>
    );
}