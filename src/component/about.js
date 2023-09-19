import React from 'react'
import './cs.css'
export default function About(){
    return(
        <>
        <div> 
            <h1>About me</h1>
            <img src='/sss.png' className="su" alt="profile pic"/>
            <p className='a1' > "I am Sujeet Kumar Shah, a passionate and innovative software developer currently pursuing my B.Tech in Computer Science at Chandigarh University, Gharuan, 
        Punjab.<br/> As a final-year student, I am enthusiastic about exploring new technologies and building cutting-edge solutions."<br/>
                
            </p>
        </div>
        
        <div className='a9'> <h1 style={{backgroundColor:'lightgoldenrodyellow'}}>Technical Competencies: <br/></h1> 
         
        <br/>  <p> 

Programming Languages: C++, C<br/>
Web Development: HTML, CSS, JavaScript, React.js<br/>
Version Control: Git<br/>

Server-Side Development: Node.js<br/>
Database: SQL<br/>
API Development<br/>
Frontend and Backend Development</p></div>
        </>
    )
}
