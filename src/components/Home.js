import React from 'react'
import {useState} from 'react'
const Home = () => {
    const [patient, setPatient] = useState({
        pname:"",padd:"",pemail:"",pphone:"",pother:"" 
    })
    let name,value;
    const handleInput=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setPatient({...patient,[name]:value});
      }

  return (
    <div className="container6">
    <div className='container7'>
        <div className="form-style-10">
<h1>Details Form<span>Enter the Patient details below</span></h1>
<form>
    <div className="section"><span>1</span>Patient Name & Address Details</div>
    <div className="inner-wrap">
        <label>Patient's Full Name <input type="text" name="pname"  value={patient.pname}
        onChange={handleInput}/></label>
        <label>Address <input type="text" name="padd"  value={patient.padd}
        onChange={handleInput}/></label>
    </div>

    <div className="section"><span>2</span>Patient Contact Details</div>
    <div className="inner-wrap">
        <label>Email Address <input type="email" name="pemail" value={patient.pemail}
        onChange={handleInput} /></label>
        <label>Phone Number <input type="text" name="pphone" value={patient.pphone}
        onChange={handleInput} /></label>
    </div>

    <div className="section"><span>3</span>Extra</div>
        <div className="inner-wrap">
        <label>Other details <input type="text" name="pother"  value={patient.pother}
        onChange={handleInput}/></label>
    </div>
    <div className="button-section">
     <input type="submit" name="Sign Up" />
     <span className="privacy-policy">
     <input type="checkbox" name="field7"/>Above entered details are correct. 
     </span>
    </div>
</form>
</div>
    </div>
    </div>
  )
}

export default Home