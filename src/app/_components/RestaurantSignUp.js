import { useState } from "react"

const RestaurantSignUp=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [c_password,setc_Password]=useState("");
    const [name,setName]=useState("");
    const [city,setCity]=useState("");
    const [address,setAddress]=useState("");
    const [contact,setContact]=useState("");

    const handleSignup=async()=>{
        console.log(email,password,c_password,name,city,address,contact)
        let result=await fetch("http://localhost:3000/api/restaurant",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"  // <--- Add this line
        },
        body:JSON.stringify({email,password,name,city,address,contact})
    })
        result=await result.json();
        console.log(result);
        if(result.success){
            alert("Restaurant Registered successfully")
        }
    }
    return(
        <>
        <h3 style={{color:'#A0153E'}}>Signup</h3>
        <div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter email id" className="input-field" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="Enter password" className="input-field" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="Confirm password" className="input-field" value={c_password} onChange={(event)=>setc_Password(event.target.value)}/>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter restaurant name" className="input-field" value={name} onChange={(event)=>setName(event.target.value)}/>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter city" className="input-field" value={city} onChange={(event)=>setCity(event.target.value)}/>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter full address" className="input-field" value={address} onChange={(event)=>setAddress(event.target.value)}/>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter contact number" className="input-field" value={contact} onChange={(event)=>setContact(event.target.value)}/>
            </div>

            <div className="input-wrapper">
                <button className="button-64" role="button" onClick={handleSignup}><span class="text">Signup</span></button>
                {/* <button className="button">SignUp</button> */}
            </div>
        </div>
        </>
    )
}
export default RestaurantSignUp