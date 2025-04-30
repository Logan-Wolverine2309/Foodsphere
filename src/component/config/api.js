import axios from "axios";

export const API_URL = "http://localhost:8080";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🛡️ Add a response interceptor
// api.interceptors.response.use(
//   (response) => response, // If response is successful, just return it
//   (error) => {
//     console.error("API Error:", error);
    
//     if (error.response?.status === 401) {
//         toast.error("Unauthorized! Please login again.");
//       }
//       if (error.response?.status === 500) {
//         toast.error("Server error! Try again later.");
//       }
      

//     if (error.code === "ERR_NETWORK") {
//       toast.error("🚨 Cannot reach server. Please check your connection!");
//     } else if (error.response) {
//       // Server responded but with an error status (400, 404, 500 etc)
//       toast.error(`❗ Error ${error.response.status}: ${error.response.data?.message || error.message}`);
//     } else {
//       // Other errors
//       toast.error(`❗ Something went wrong: ${error.message}`);
//     }

//     // Optionally: rethrow the error if you want to catch it later
//     return Promise.reject(error);
//   }
// );
