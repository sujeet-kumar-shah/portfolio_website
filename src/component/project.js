import React from 'react'
import'./cs.css'
export default function Project(){
    return(

        <>
        <div style={{backgroundColor:'lightcoral'}}> 
        <h1>project</h1>
        <div className="a2">
            <img style={{ height:'120px', width:'120px', alignSelf:'center'}
            } src='/s.png'  alt="Webchat"/>
           <a href='https://webchat-1edt.onrender.com/' target='_blank' > <h2>--webchat--</h2></a>
            <br/>
            <p> •	Webchat is real time video calling and chatting web app.<br/>
•	Frontend totally in HTML, CSS, and JAVA SCRIPT.<br/>
•	For video calling I use Webrtc.<br/>
•	Backend with NodeJS and MySQL.<br/>
</p>

        </div>
        <div className="a3">
  <h2 > -- Online data saving and<br/> pdf to world convertor --</h2>
  <br/>
  <p> •	It is data saving platform in which you can save any file, <br/>text and user will receive a short link using link user can access his content in any browser and <br/> convert pdf to world and world to pdf.
<br/>•	Frontend using HTML CSS JS.
<br/>•	Backend technology NODEJS, SQL.
</p>
  
        </div>


        <div className="a4">
<h2>--Online Video Streamer platform--</h2><br/>
<p>•	Backed with Php, SQL, designed with the help of HTML and CSS.<br/>
•	Learned how to handle form data to be processed at back-end.<br/>
•	Learned how to make use of browser cookies and sessions for storing temporary data.<br/>

 </p>
        </div>
        <div className='a5'>
            <h2>--api for NFT--</h2><br/>
        <p> •	The API provided a robust and efficient solution for managing NFTs,<br/> empowering users to create ,fetch , delete ,update , trade, and track unique digital assets securely.
<br/>•	Security measure in API is encryption and authentication using JWT

</p>
        </div>
        </div>
        </>
    )
}