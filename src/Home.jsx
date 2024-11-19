import './Home.css'
function Home(){
return(
<div className='parent'>
<div className='content'>
    <div className='circle'></div>
    <p className='title'>BASE<br></br> APPAREL</p>
    <div className='extra'>
    <p  style={{fontFamily:'sans-serif',fontSize:'60px',lineHeight:'0px', color:'rgb(193, 151, 153)',fontWeight:300 }}>WE'RE </p>
    <p style={{fontFamily:'arial',fontSize:'60px',lineHeight:'0px', fontWeight:600}}>COMING</p>
    <p style={{fontFamily:'arial',fontSize:'60px',lineHeight:'0px', fontWeight:600,marginBottom:'5px'}}>SOON</p>
    </div>
    

    <p className='ad'>Hello fellow shoppers happy to announce our new wedding fashion launched in our grand inaugration happeing in kochi.</p>
    <input className='email' placeholder='Email Address' type='text'/>
    <input type='submit' placeholder="hi"/>
</div>
<div><img src='./img/winona.jpg' className='thumb' /></div>
</div>



    
)

}
export default Home;