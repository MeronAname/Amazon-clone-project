import axios from "axios"
const axiosInstance = axios.create({
    // local instance of firebase functions
    // baseURL: "http://127.0.0.1:5001/clone-1eda2/us-central1/api"
    // deployed version of firebase function 
    baseURL: "https://us-central1-clone-1eda2.cloudfunctions.net/api",

    // deployed version of amazon server on render.com
    // baseURL:"https://amazon-api-deploy-r3rk.onrender.com/",
    

});

export {axiosInstance}