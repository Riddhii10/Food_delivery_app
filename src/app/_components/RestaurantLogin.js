const RestaurantLogin=()=>{
    return(
        <>
        <h3 style={{color:'#A0153E'}}>Login Component</h3>
        <div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter email id" className="input-field"/>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="Enter password" className="input-field"/>
            </div>
            <div className="input-wrapper">
                <button className="button-64" role="button"><span class="text">Login</span></button>
                {/* <button className="button">Login</button> */}
            </div>
        </div>
        </>
    )
}
export default RestaurantLogin