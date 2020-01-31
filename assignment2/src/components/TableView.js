
    import React from 'react'
    import './tableview.css'

   export const TableView = ({ userinfo }) => {
      
      return (
        <div className="container">
        <h2>Basic User Information</h2>
        <table className="table table-bodered table-hover table-responsive" >
        
        <thead className="thead-light"> 
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
             <th>{info1.name}</th>
             <th>{info1.username}</th>
             <th>{info1.email}</th>
             <th>
               <tr>Street- {info1.address.street}</tr>
               <tr>Suite- {info1.address.suite}</tr>
               <tr>City- {info1.address.city}</tr>
               <tr>Zipcode- {info1.address.zipcode}</tr>
               <tr className="geo">geo -
               
                  <tr className="fontcolor">lat : {info1.address.geo.lat}</tr>
                  <tr className="fontcolor">lng : {info1.address.geo.lng}</tr>
               </tr>
               
             </th>
             <th>{info1.phone}</th>
             <th>{info1.website}</th>
             <th>
               <tr>Name- {info1.company.name}</tr>
               <tr>catchPhrase- {info1.company.catchPhrase}</tr>
               <tr>bs- {info1.company.bs}</tr>
             </th>
             
           </tr>
            
          ))}
          </tbody>
          
          </table>
        </div>
      )
    };

    
    