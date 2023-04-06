import React,{useState} from 'react'
import myimage from '../../../images/specialist.png';
import './specialist.css'
export default function Specialist(props) {
  const [selectedCity, setSelectedCity] = useState('');

  const cities = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'];

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };
  return (
    <>
      <div className="image-div1">
        <div className="image-text1">
            <div className='w3'>Talk to Specialist</div>
            <div className="w4"> near you</div>
            <div className='w5'>Find a doctor which can help you...</div> 
        </div>
        <img src={myimage}/>
      </div>
      <div className="buttonsmid">
         <div className="loc">
            <div className="btnl">Location</div>
            <select className='inpt9' id="city" value={selectedCity} onChange={e => setSelectedCity(e.target.value)}>
                <option value="" selected style={{display:'none'}}>Enter the location</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
            </select>
         </div>
         <div className="loc">
            <div className="btnl">Disease</div>
            <div className="inpt69">{props.dis}</div>
         </div>
         <div className="find">
            <button className="btnl">Find</button>
         </div>
      </div>
      <div className="cards">
        <div className="card">
             <div className="upperpart"><img src={props.img} /></div>
             <div className="lowerpart"><span>{props.name}</span><span>{props.loc}</span> </div>
        </div>
        <div className="card">
             <div className="upperpart"><img src={props.img} /></div>
             <div className="lowerpart"><span>{props.name}</span><span>{props.loc}</span> </div>
        </div>
        <div className="card">
             <div className="upperpart"><img src={props.img} /></div>
             <div className="lowerpart"><span>{props.name}</span><span>{props.loc}</span> </div>
        </div>
        
      </div>
      
    </>
  )
}
