import React from "react";
import './Day4App.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

const fruits= ["Navapazham","Amala","Tomato","Guava","Mango"];
 
export default function Day4(){
   const [fruit,setFruit]=React.useState("");
   const [name, setName]=React.useState("");
   const handleout=()=>{alert("Hello "+name+"!Your favourite fruit is "+fruit);}
   
   return(
       <div id="box">
            <br /> <br /> <br />
            <h2>Please Enter your Name and Favourite fruit</h2>
        <div>
                <form >
                        <TextField  value={name} onChange={(n)=>setName(n.target.value)} id="colour" sx={{width:300,margin:3}} label="Name" variant="outlined" />
                        <Autocomplete onChange={(event, value) =>setFruit(value)} disablePorta className="dropbox" id="combo-box-demo"
                            options={fruits} sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="choose your fruit" />}
                        /><br />
                        <Button onClick={handleout}  variant="contained"  >submit</Button>
                </form>
            </div>
       </div>
   )
}