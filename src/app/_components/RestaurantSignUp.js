const RestaurantSignUp=()=>{
    return(
        <>
        <h3 style={{color:'#A0153E'}}>Signup</h3>
        <div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter email id" className="input-field"/>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="Enter password" className="input-field"/>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="Confirm password" className="input-field"/>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter restaurant name" className="input-field"/>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter city" className="input-field"/>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter full address" className="input-field"/>
            </div>
            <div className="input-wrapper">
                <input type="number" placeholder="Enter contact number" className="input-field"/>
            </div>
            <div className="input-wrapper">
                <button class="button-64" role="button"><span class="text">Signup</span></button>
                {/* <button className="button">SignUp</button> */}
            </div>
        </div>
        </>
    )
}
export default RestaurantSignUp