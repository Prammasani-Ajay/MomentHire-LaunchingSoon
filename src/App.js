import './App.css';
import image1 from './Assets/img2.png';
import React, {useState} from 'react';



function App() {
  const [showBlock, setShowBlock] = useState(false);

  const handleClick = () => {
    setShowBlock(true);
  };
  const exitToForm = () => {
    setShowBlock(false);
  };

  return (
    <main>
      <nav className='navbar'>
        <h1 className='titleOfPage'>MomentHire</h1>
        <button className='contactUS' onClick={handleClick}>Contact US</button>
      </nav>
      <section className='entireContent'>
        <div>
          <p className='launchingSoonText'>
            Launching Soon !
          </p>
          <p className='inviteText'>
            Welcome to MomentHire : Launching Careers , Shaping Futures
          </p>
          <p className='aboutCompany'>
            Are you a student or recent graduate eager to embark on a journey towards a fullfill career ? Look no further than MomentHire - Your gateway to meaningfull oppertunities and transformative experiences.
          </p>
        </div>
        <div>
          <img src={image1} alt='Img' id='imageMain' />
        </div>
        {showBlock && (
        <dialog className='formToContact'>
            <button className='closeBtn' onClick={exitToForm}>Close </button>
            <form>
              <label>First Name</label><br/>
              <input type='text' name='Name' placeholder='Enter Full Name'required/><br/>
              <label>E-Mail</label><br/>
              <input type='email' name='eMail' placeholder='Enter E-Mail' required/><br/>
              <label>Mobile</label><br/>
              <input type='text' name='Number' placeholder='Enter Contact' required/><br/>
              <label>Comment</label><br/>
              <input type='text' name='text' placeholder='Enter Message'/><br/><br/>
              <input type='submit' name='submitbtn' value='SUBMIT'/>
              </form>
        </dialog>
      )}
      </section>
    </main>

  );
}

export default App;
