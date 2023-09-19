import React from 'react'
const resume ='C:\Users\HP\OneDrive\Documents\project\website\web\src\component\resume.pdf'
export default function Contact(){
    return (
        <>
        <div>

        <a href={resume} download="resume.pdf" target="_blank" style={{ }}>resume</a>
        <br/> 
       <a href='sujeetshah321s@gmail.com'>sujeetshah321sgmail.com</a>
        </div>
        </>
    )
}