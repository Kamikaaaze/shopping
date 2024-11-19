import './Home.css'
import { useState } from 'react';
function Home(){

    const[email,setEmail]= useState("");

    const handleOnChange= (event)=>{
        setEmail(event.target.value);
    }

    const handleOnClick= ()=>{
        console.log(email);
    }
return(
<div className='parent'>
<div className='content'>
    <div className='logo'>
    <div className='circle'></div>
    <p className='title'>BASE<br></br> APPAREL</p>
    </div>
    
    <div className='extra'>
    <p  style={{fontFamily:'sans-serif',fontSize:'60px',lineHeight:'0px', color:'rgb(193, 151, 153)',fontWeight:300 }}>WE'RE </p>
    <p style={{fontFamily:'arial',fontSize:'60px',lineHeight:'0px', fontWeight:600}}>COMING</p>
    <p style={{fontFamily:'arial',fontSize:'60px',lineHeight:'0px', fontWeight:600,marginBottom:'5px'}}>SOON</p>
    </div>
    

    <p className='ad'>Hello fellow shoppers happy to announce our new wedding fashion launched in our grand inaugration happeing in kochi.</p>
    <div className='email-container'>
    <input className='email' placeholder='Email Address' type='text' onChange={handleOnChange}/>
    <input className='submit' type='submit' value=">" onClick={handleOnClick}/>
    </div>
  
</div>
<div><img src='./img/winona.jpg' className='thumb' /></div>
</div>



    
)

}
export default Home;