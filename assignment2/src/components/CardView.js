 import React from 'react';
 import './cardview.css';
    

  export const CardView = ({ userinfo }) => {
      return (
        <div>
        <center><h1>Basic User Information</h1></center>
        {userinfo.map((info1) => (
          <div className="card"key={info1.id}>
              <div className="card-body">
              <h5 className="card-title">{info1.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted "><span className="span">Username- </span> <span className="subspan">{info1.username}</span></h6>
              <h6 className="card-subtitle mb-2 text-muted"><span className="span">Email- </span><span className="subspan">{info1.email}</span></h6>
              <h6 className="card-subtitle mb-2 text-muted"><span className="span">Phone- </span><span className="subspan">{info1.phone}</span></h6>
              <h6 className="card-subtitle mb-2 text-muted"><span className="span">Website- </span><span className="subspan">{info1.website}</span></h6>
              <h6 className="span">Address</h6>
              <p className="card-text"><span className="light">Street-</span>  <span className="subspan">{info1.address.street}</span></p>
              <p className="card-text"><span className="light">Suite-</span><span className="subspan">{info1.address.suite} </span></p>
              <p className="card-text"><span className="light">City- </span><span className="subspan">{info1.address.city}</span></p>
              <p className="card-text"><span className="light">Zipcode- </span><span className="subspan">{info1.address.zipcode}</span></p>
              <h6 className="span" >geo</h6>
              <p className="card-text"><span className="smalltext">lat: </span><span className="subspan">{info1.address.geo.lat}</span></p>
              <p className="card-text"><span className="smalltext">lng: </span><span className="subspan">{info1.address.geo.lng}</span></p>
              <h6 className="span">Company</h6>
              <p className="card-text"><span className="light">Name- </span><span className="subspan">{info1.company.name}</span></p>
              <p className="card-text"><span className="light">catchPhrase- </span><span className="subspan">{info1.company.catchPhrase}</span></p>
              <p className="card-text"><span className="light">bs- </span><span className="subspan">{info1.company.bs}</span></p>
            </div>
          </div>
        ))}
      </div>
      )
    };

    
    