import { useRouter } from "next/navigation";
import { useState } from "react"

const RestaurantLogin=()=>{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [error,setError]=useState(false);
    const router=useRouter();

    const handleLogin=async()=>{
        if(!email || !password){
            setError(true)
            return false
        }
        else{
            setError(false)
        }
        // console.log(email,password);

        let response= await fetch("http://localhost:3000/api/restaurant",{
            method:'POST',
            body:JSON.stringify({email,password,login:true})
        })
        response=await response.json();
        if(response.success){
            const {result}=response;
            delete result.password
            localStorage.setItem("restaurantUser",JSON.stringify(result));
            router.push("/restaurant/dashboard")
            // alert("Login successful.")
        }else{
            alert("Login failed.")
        }
    }
    return(
        <>
        <h3 style={{color:'#A0153E'}}>Login Component</h3>
        <div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter email id" className="input-field" value={email} onChange={(e)=>setEmail(e.target.value)}
                />
                {error && !email && <span className="input-error2">Please enter valid email</span>}
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="Enter password" className="input-field" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {error && !password && <span className="input-error2 ">Please enter valid pass</span>}
            </div>
            <div className="input-wrapper">
                <button className="button-64" role="button" onClick={handleLogin}><span class="text">Login</span></button>
                {/* <button className="button">Login</button> */}
            </div>
        </div>
        </>
    )
}
export default RestaurantLogin