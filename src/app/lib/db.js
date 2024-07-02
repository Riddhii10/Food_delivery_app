// configuration file
require('dotenv').config();
const {USERNAME,PASSWORD}=process.env;
const username1=USERNAME
const password1=PASSWORD
// const {username,password}=process.env
console.log(username1)
console.log(password1)
export const connectionStr="mongodb+srv://riddhi:10032004@cluster0.gwsfua7.mongodb.net/restoDB?retryWrites=true&w=majority&appName=Cluster0";