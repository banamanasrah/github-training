//remember bana em al bun : we created the context/
/*Manages shared application state, such as authentication state.*/

import { createContext,useState,useEffect } from "react";
import {
  login as loginRequest,
  register as registerRequest
} from "../services/authService";


//bbnnbnn :AuthContext is the context object that we'll use to share authentication information across components.
export const  AuthContext=createContext();

export const AuthProvider =({children})=>{
    
   const [token, setToken] = useState(localStorage.getItem("token"));
//useState → tells React to rerender the component when the token changes.(change the UI according to need)

useEffect(() => {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
}, [token]);//dont' forget our useEffect will keep an eye on the changes of the dependency array(our token in our case)


const loginUser = async (credentials) => {
  const loginResponseData = await loginRequest(credentials);
  setToken(loginResponseData.token);
  return loginResponseData;
};

const logoutUser=()=>{
setToken(null);
};
//userData contains the user's firstname, lastname, email, and password.
const registerUser = async (userData) => {
  const registerResponse = await registerRequest(userData);
  setToken(registerResponse.token);
  return registerResponse;
};

//what is point of AuthContext.Provider ?it's to give all those stuff we wrote here to the childerns ->
//the childrens here are the app commponent +all what's inside it 
    return (
        //this will mean alow access to those inside value 
        <AuthContext.Provider value={{ token, loginUser, registerUser, logoutUser }}>
         {children}
        </AuthContext.Provider>
    );
}








//for me bun bun :
/*
- useState → manages state and triggers re-renders when the state changes ->
((When we update the state using its setter function, React triggers a re-render.))
- useEffect → performs an action after rendering when its dependencies change.->
Runs code after rendering.
Checks its dependency array.
When a dependency changes, it runs the code inside its arrow function.
(((useState manages the changing data, while useEffect performs actions
 in response to those changes.)))
*/


/*AuthProvider is a component that provides authentication data to other components.
children represents whatever we wrap inside AuthProvider.
AuthContext.Provider makes the shared data available to those children.*/ 


//in useEffect:
/*"Whenever the component renders and the token value has changed, 
run this code to synchronize the token with localStorage." */
/*Remember: AuthProvider makes the data available, while useContext
 allows components to access it. */