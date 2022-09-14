import { useEffect, useState } from "react";
import axios from 'axios'

function ApartmentsPage() {
  
  const [apartments, setApartments] = useState([]);

  const getApartaments = async () => {
    try {
      const { data } = await axios.get('https://ironbnb-m3.herokuapp.com/apartments')
      setApartments(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getApartaments()
  }, [])

  return (
    <div>
      <h3>List of apartments</h3>
      {apartments.map((apartment) => (
        <div key={apartment._id} className="card">
          <img src={apartment.img} alt="apartment" />
          <h3>{apartment.title}</h3>
          <p>Price: {apartment.pricePerDay}</p>
        </div>
      ))}

    </div>
  );
}

export default ApartmentsPage;