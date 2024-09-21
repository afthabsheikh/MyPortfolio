import React from "react";
import { Link } from "react-router-dom";

export default function Skills(){
    return(
        <>
            <div className="skill">
                <h1>Skills</h1>
                <h3>Programming language 💻</h3>
                <div className="skill-box">
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/python.png" alt="Python" /></Link></li>
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/js.png" alt="JavaScript" /></Link></li>
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/c-program.png" alt="C" /></Link></li>
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/java.png" alt="Java" /></Link></li>
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/C-sharp.png" alt="C#" /></Link></li>
                </div>
                <h3>FrontEnd technologies 🎨</h3>
                <div className="skill-box">
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/html.png" alt="Html" /></Link></li>
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/css.png" alt="CSS" /></Link></li>
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/reactjs.png" alt="ReactJs" /></Link></li>
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/bootstrap.png" alt="Bootstrap" /></Link></li>
                </div>
                <h3>BackEnd technologies ⚙</h3>
                <div className="skill-box">
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/django.png" alt="Django" /></Link></li>
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/nodejs.png" alt="NodeJs" /></Link></li>
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/php.png" alt="PHP" /></Link></li>
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/api.png" alt="API" /></Link></li>
                </div>
                <h3>Databases 🗄</h3>
                <div className="skill-box">
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/mongodb.png" alt="MongoDB" /></Link></li>
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/mysql.png" alt="MySQL" /></Link></li>
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/sqlite.png" alt="SQLite" /></Link></li>
                </div>
                <h3>Softwares 📱</h3>
                <div className="skill-box">
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/git.png" alt="Git" /></Link></li>
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/android-studio.png" alt="Android studio" /></Link></li>
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/figma.png" alt="Figma" /></Link></li>
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/wordpress.png" alt="WordPress" /></Link></li>
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/powerBI.png" alt="Power BI" /></Link></li>
                    <li className="skill-list"><Link className="link" to=""><img className="skill-img" src="images/Excel.png" alt="Microsoft Excel" /></Link></li>
                </div>
                <div className="github-profile">
                    <h3><i className="fab fa-github"> For more visit my github profile</i></h3>
                    <Link to="https://www.github.com/afthabsheikh"><img src="images/github-img.PNG" alt="Github-profile" className="github-img" /></Link>
                </div>
            </div>
        </>
    );
}