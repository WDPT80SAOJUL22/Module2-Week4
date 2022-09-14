import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";      

function AddApartmentPage() {
  const [headline, setHeadline] = useState("");     
  const [price, setPrice] = useState(1);

  const navigate = useNavigate()            

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newApartament = {
      title: headline,
      pricePerDay: price
    }
    await axios.post('https://ironbnb-m3.herokuapp.com/apartments', newApartament)
    navigate('/')
  }

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      
      <form >
        <label>Title</label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setHeadline(e.target.value)}
          value={headline}
        />

        <label>Price per Day</label>
        <input
          type="number"
          name="pricePerDay"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        
        <button type="submit" onClick={handleSubmit}>Create Apartment</button>
        
      </form>
    </div>
  );
}

export default AddApartmentPage;