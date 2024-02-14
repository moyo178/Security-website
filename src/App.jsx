import { useState } from 'react'
import './App.css'
import logo from './assets/images/logo.svg'
import man from './assets/images/br.png'
import nam1 from './assets/images/frame.png'
import nam2 from './assets/images/vector.svg'
import smile from './assets/images/easy.jpg' 
import dogs from './assets/images/group 2.png'
import contact from './assets/images/mobile.png'
import con from './assets/images/FRAME 28.svg'
import con1 from './assets/images/FRAME.svg'
import con2 from './assets/images/FRAME28.svg'
import cops from './assets/images/frame1.png'
import logo1 from './assets/images/logo1.svg'
import fb from './assets/images/can.jpg'
import x from './assets/images/can1.jpg'
import insta from './assets/images/can2.jpg'
import link from './assets/images/can3.jpg'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* header section */}
      <section className='sec'>
      <div className='header'>
      <navbar>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </navbar>
     <div id='man'> <img src={man} alt="" className='nam'/>
     <img src={nam1} alt="" className='nam1'/>
     <img src={nam2} alt="" className='nam2'/>
     </div>
     <div id='sec-text'>
    <h6 className='h6'>your number one security detail company</h6> 
  <h1 className='h1'>Assurance.Vigilance.Protection</h1>
      <p className='p'>We redefine safety and protection through unparalleled expertise and unwavering commitment.We stand as the vanguard of your peace of mind, providing tailored solutions to safeguard what matters most.</p>
      <button>  CONTACT US</button>
     </div>
      </div>
      </section>
    <section className='about'>
    <h4 className='about-h'>ABOUT US</h4>
    <h2 className='h2'>BABS SAFEZONE AND K9 SERVICES LIMITED</h2>
    <p className='aboutp'>We are a registered organization with expert board members who are professionals in different security and  coniine fields and have undergone practical experience in different organizations, departments and trade zones.  We specialize in providing security guards, mob-ile patrol and event security personnel to clients. We are available 24/7 for all your business and personal and special occasions</p>
    </section>

    <section className='content-area'>
      <div className='content'>
        <img src={smile} alt="" className='smile' />
        <div className='txt'>
          <h3 className='abouth'>  OUR SERVICES</h3>
          <h2 className='contentp'>Security solutions for experts, by experts</h2>
          <p className='txtp'>
          We are fully registered, trusted, bonded and insured professional security guards services company. We specialize in providing security guards, mobile patrol and event security personnel to clients
          </p>
              <div classname='log1'>
              <p className='boxp'>Event security service</p>
            <button className='box'></button>
            <h6 className='percent'>90%</h6>
            </div>

            <div classname='log1'>
              <p className='boxp'>Mobile patrol</p>
            <button className='box'></button>
            <h6 className='percent'>90%</h6>
            </div>

            <div classname='log1'>
              <p className='boxp'>Backstage crowd management</p>
            <button className='box'></button>
            <h6 className='percent'>90%</h6>
            </div>
          </div>
          </div>   
    </section>

    <section className='services'>
      <h3 className='about-h3'>OTHER SERVICES</h3>
      <div className='k9'>
        <img src={dogs} alt="" className='dogs'/>
        <div className='list1'>
          <h3 className='txt4'>OUR K9 SERVICES: <span>DOG BREEDING</span></h3>
          <ol>
            <li  className='list'>
              
              <div className='cant'>
              Breeding and selling of different types of breed</div>
            </li>
            <li className='list'><div className='cant'>Dog-sitting for clients on vacation</div></li>
            <li className='list'><div className='cant'>Dog training and security</div></li>
            <li className='list'><div className='cant'>Dog recommendations and pedigree safety in importation</div></li>
            <li className='list'><div className='cant'>pet food production</div></li>
            </ol>
            </div>
      </div>
    </section>

    <section className='contact'>
      <div className='c1'>
      <img src={contact} alt="" className='cnt'/>
      <div id='contact-txt'>
      <h2 className='contact-h1'>
        Need our services?
      </h2>
      <p className='contact-p'>
        We are here to help with all your security issues. For queries, assistance, or more information feel free to reach out to us 
      </p>
      <li className='li-1'>
      <div className='fl'>
        <img src={con} alt=""/>
      <div className='cant'>24, johnson street, i dont know bus stop , yaba lagos</div>  
        </div>
      </li>
      <li className='li-1'>
        <div className='fl'>
        <img src={con1} alt=""/>
       +2349071056670</div>
      
      </li>
      <li className='li-1'>
      <div className='fl'>
      <img src={con2} alt="" />
        oyekanfaridat17@gmail.com
        </div>
      </li>
      <p className='or'>------------ or ------------</p>

      <h4>Send Us a Message</h4>

      <div className='input'>
        <p className='log'>Name</p>
        <input type="name" placeholder='Name' id="input" required />
      </div>
      <div className='input'>
        <p className='log'>Email</p>
        <input type="email" name="" id="input" placeholder='Email' required/>
      </div>
      <div className='input'>
        <p className='log'>Message</p>
      <input type="Message" placeholder=' Message' id="input"  required/>
      </div>
      <div className='input'><input type="submit" value="SEND  " className='send' /></div>
      </div>
      </div>
    </section>


  <section className='testimonials'>
    <div className='testimonials-header'>
  <h3 className='about-h3'>TESTIMONIAL</h3>
  <h2 className='h2'>See what our clients are saying</h2>
        </div>
          <div className='test-box'>

          <div className='testimonial-box'>
            <div className='txt'>  
          <h2 className='box-h1'>Best Security Detail I Have Ever Used</h2>
          <p className='testimonial-p'>The attention to details of the security agents was amazing. They kept everything under wraps and I did not have to worry about anything</p>
          <h2 className='box-h3'>-John Smith</h2>
        </div></div>



        <div className='testimonial-box1'>
       
            <div className='txt'>     
           <h2 className='box-h2'>Best Security Detail I Have Ever Used</h2>
          <p className='testimonial-p'>The attention to details of the security agents was amazing. They kept everything under wraps and I did not have to worry about anything</p>
          <h2 className='box-h4'>-John Smith</h2>
        </div>
        </div>


        <div className='testimonial-box'>
            <div className='txt'>           
            <h2 className='box-h1'>Best Security Detail I Have Ever Used</h2>
          <p className='testimonial-p'>The attention to details of the security agents was amazing. They kept everything under wraps and I did not have to worry about anything</p>
          <h2 className='box-h3'>-John Smith</h2>
        </div>
        </div>  
          </div>
  </section>

  <section className='info'>
    <div className='info-txt'> 
       <h1 className='info-h1'>
      We are available 24/7 for all your businesess and proposal and special occasions.
    </h1>

    <p className='info-p'>Do not let TRAGEDY happen. Hire our security guards today. Our operators are always available to help you protect your valuables</p>
    </div>
        <img src={cops} alt="" className='cops' />
  </section>
  <section className='footnote'>
    <img src={logo1} alt="" className='logo1'/>
    <p className='cent'>We are a registered organization with expert board members who are professionals in different security and  coniine fields and have undergone practical experience in different organizations, departments and trade zones.  We specialize in providing security guards, mob-ile patrol and event security personnel to clients. We are available 24/7 for all your business and personal and special occasions</p>
    <h3 className='txt4' id='txts'>Find <span>Us</span></h3>
    <div className='imgs'>
      <img src={fb} alt=""/>
      <img src={x} alt=""/>
      <img src={insta} alt=""/>
      <img src={link} alt=""/>
    </div>
    <div id='footer'>
      <p>Copyright 2023 by Babs safezone. All right reserved</p>

      <p>Terms and conditions | Privacy policy</p>

    </div>
  </section>
    </>
  )
}

export default App
