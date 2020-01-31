
    import React from 'react'
    import './tableview.css'

   export const TableView = ({ userinfo }) => {
      
      return (
        <div className="container">
        <h2>Basic User Information</h2>
        <table className="table table-bodered table-hover table-responsive" >
        
        <thead className="thead-light" > 
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {userinfo.map((info1) => (
           <tr>
             <th className="fontcolor">{info1.name}</th>
             <th className="fontcolor">{info1.username}</th>
             <th className="fontcolor">{info1.email}</th>
             <th>
               <tr>Street-<span className="fontcolor"> {info1.address.street}</span></tr>
               <tr>Suite- <span className="fontcolor">{info1.address.suite}</span></tr>
               <tr>City- <span className="fontcolor">{info1.address.city}</span></tr>
               <tr>Zipcode- <span className="fontcolor">{info1.address.zipcode}</span></tr>
               <tr className="geo">geo -
               
                  <tr className="fontcolor"><span className="span">lat : </span>{info1.address.geo.lat}</tr>
                  <tr className="fontcolor"><span className="span">lng :</span> {info1.address.geo.lng}</tr>
               </tr>
               
             </th>
             <th className="fontcolor">{info1.phone}</th>
             <th className="fontcolor">{info1.website}</th>
             <th>
               <tr>Name- <span className="fontcolor">{info1.company.name}</span></tr>
               <tr>catchPhrase- <span className="fontcolor">{info1.company.catchPhrase}</span></tr>
               <tr>bs- <span className="fontcolor">{info1.company.bs}</span></tr>
             </th>
             
           </tr>
            
          ))}
          </tbody>
          
          </table>
        </div>
      )
    };

    
    