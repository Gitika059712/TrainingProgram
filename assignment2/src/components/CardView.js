
    import React from 'react'
    

  export const CardView = ({ userinfo }) => {
      return (
        <div>
        <center><h1>Basic User Information</h1></center>
        {userinfo.map((info1) => (
          <div className="card"key={info1.id}>
               <div className="card-body">
              <h5 className="card-title">{info1.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted"><span>Username- </span> {info1.username}</h6>
              <h6 className="card-subtitle mb-2 text-muted"><span>Email- </span>{info1.email}</h6>
              <h6 className="card-subtitle mb-2 text-muted"><span>Phone- </span>{info1.phone}</h6>
              <h6 className="card-subtitle mb-2 text-muted"><span>Website- </span>{info1.website}</h6>
              <h6>Address</h6>
              <p className="card-text"><span>Street- </span>{info1.address.street}</p>
              <p className="card-text"><span>Suite- </span>{info1.address.suite}</p>
              <p className="card-text"><span>City- </span>{info1.address.city}</p>
              <p className="card-text"><span>Zipcode- </span>{info1.address.zipcode}</p>
              <h6>geo</h6>
              <p className="card-text"><span>lat: </span>{info1.address.geo.lat}</p>
              <p className="card-text"><span>lng: </span>{info1.address.geo.lng}</p>
              <h6>Company</h6>
              <p className="card-text"><span>Name- </span>{info1.company.name}</p>
              <p className="card-text"><span>catchPhrase- </span>{info1.company.catchPhrase}</p>
              <p className="card-text"><span>bs- </span>{info1.company.bs}</p>
            </div>
          </div>
        ))}
      </div>
      )
    };

    
    