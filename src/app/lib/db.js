// configuration file
const {username,password}=process.env
export const connectionStr="mongodb+srv://"+username+":"+password+"@cluster0.gwsfua7.mongodb.net/restoDB?retryWrites=true&w=majority&appName=Cluster0";