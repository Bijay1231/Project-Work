import React,{component} from 'react';
import {Redirect} from "react-router-dom"

function Protected(props){
    const token=localStorage.getItem('token')
    console.log(token)
return(
<div>
    {token ?
<props.Cmp/>
: <Redirect to="/"/>}
</div>
);
}

export default Protected