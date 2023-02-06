import React from "react";

import { Link } from "react-router-dom";
const Notfound = () =>{
    return <div style={{textAlign:"center", marginTop:'10%'}}>
        <h1>404 Not Found</h1>
<p style={{textAlign:"center", marginTop:'5%'}}>
              <Link to="/">Go to Home </Link>
            </p>
    </div>
}



export default Notfound;