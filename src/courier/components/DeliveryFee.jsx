import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Typography,
} from '@material-tailwind/react';
import ReactGoogleAutocomplete from 'react-google-autocomplete';
import axios from 'axios';

function DeliveryFee({ originData }) {
 
  const [inputValue, setInputValue] = useState('Set Location');
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState("Colombo, Sri Lanka");
  const [destination, setDestination] = useState("Kurunegala, Sri Lanka");
  const [distance, setDistance] = useState('');
  const [deliveryFee, setDeliveryFee] = useState(0.00);
  useEffect(() => {
    setOrigin(originData);
    setDestination("Kurunegala, Sri Lanka");
  }, [origin]);
  const handleOpen = () => setOpen(!open);

  const fetchDistance = async (destination) => {
    try {
      const matrix = new google.maps.DistanceMatrixService();

      matrix.getDistanceMatrix({
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
      }, function(response, status) {
        if (status === 'OK') {
          const distanceValue = response.rows[0].elements[0].distance.value; // Distance in meters
          const distanceInKilometers = distanceValue / 1000; // Convert to kilometers
          setDistance(distanceInKilometers);
          const fee = (distanceInKilometers * 50).toFixed(2); // 50 LKR per kilometer
          setDeliveryFee(fee);
        } else {
          console.error('Error fetching distance:', status);
        }
      });
    } catch (error) {
      console.error('Error fetching distance:', error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Card className="w-full shadow-none">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-5">
            Delivery Location
          </Typography>
          <div className=' flex flex-wrap justify-between'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-location-dot" style={{ marginRight: '1em' }} />
              <div>
                {open ? (
                  <ReactGoogleAutocomplete
                    style={{ zIndex: 100 }}
                    apiKey="AIzaSyDFWFduGo8WMG2ub8nbDxynpTgfnLx93EA"
                    onPlaceSelected={(place) => {
                      setDestination(place.formatted_address);
                      fetchDistance(place.formatted_address);
                    }}
                  />
                ) : (
                  inputValue
                )}
              </div>
            </div>
            <div className=' text-primary font-semibold' style={{ cursor: 'pointer' }} onClick={handleOpen}>
              Change
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <i className="fa-solid fa-comment-dollar" style={{ marginRight: '1em' }} />
            <label htmlFor="">Delivery Charge:</label>
          </div>
          <div style={{ marginLeft: '33px' }}>LKR: {deliveryFee} </div>

          <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <i className="fa-solid fa-handshake-simple" style={{ marginRight: '1em' }} />
            <label htmlFor="">Cash on delivery available</label>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <i className="fa-solid fa-rotate-left" style={{ marginRight: '1em' }} />
            <label htmlFor="">7 days return</label>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default DeliveryFee;
