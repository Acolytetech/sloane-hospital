import React from 'react';
import './Lookingforyou.css';
import chatwithdoctors from '../../../images/41-512.webp';
import buymedician from '../../../images/medicana buy.jpg';
import bookappointment from '../../../images/book an appointment.jpg';
import labtest from '../../../images/lab test.jpg';
import vaccination from '../../../images/vaccination.avif';
import daignostic from '../../../images/home daignostics.jpg';

const Lookingforyou = () => {
  const phoneNumber = '9657601501'; // Replace with your phone number
  const message = 'Hello, I need assistance'; // Your message
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <>
      <div className='lookingheading'>
        <h1>What are you looking for?</h1>

        <div className='lookingSection'>
          <div className='lookingdiv'>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <div className='lookingdiv-img'>
                <img src={chatwithdoctors} alt='' />
              </div>
              <div className='lookingdiv-content'>
                <h6>Chat with Doctors</h6>
              </div>
            </a>
          </div>
          <div className='lookingdiv'>
            <a href='#'>
              <div className='lookingdiv-img'>
                <img src={buymedician} alt='' />
              </div>
              <div className='lookingdiv-content'>
                <h6>Buy Medicine</h6>
              </div>
            </a>
          </div>
          <div className='lookingdiv'>
            <a href='/appointment'>
              <div className='lookingdiv-img'>
                <img src={bookappointment} alt='' />
              </div>
              <div className='lookingdiv-content'>
                <h6>Book an Appointment</h6>
              </div>
            </a>
          </div>
          <div className='lookingdiv'>
            <a href='#'>
              <div className='lookingdiv-img'>
                <img src={labtest} alt='' />
              </div>
              <div className='lookingdiv-content'>
                <h6>Lab Tests</h6>
              </div>
            </a>
          </div>
          <div className='lookingdiv'>
            <a href='#'>
              <div className='lookingdiv-img'>
                <img src={vaccination} alt='' />
              </div>
              <div className='lookingdiv-content'>
                <h6>Vaccination</h6>
              </div>
            </a>
          </div>
          <div className='lookingdiv'>
            <a href='#'>
              <div className='lookingdiv-img'>
                <img src={daignostic} alt='' />
              </div>
              <div className='lookingdiv-content'>
                <h6>Home Diagnostic Service</h6>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lookingforyou;
