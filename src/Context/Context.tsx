import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState, type ReactNode } from "react";

 interface User{
    id:number;
    firstName:string;
    email:string;
    phone:number;
    age:number;
 }
 interface AuthContextType{
    userData:User |null;
    saveUserData:()=>void;
 }
 interface AuthContextProviderProps{
    children:ReactNode;
 }
export const AuthContext=createContext<AuthContextType |null>(null);
export default function AuthContextProvider({children}:AuthContextProviderProps){
    const [userData,setUserData]=useState<User |null>(null);
    const saveUserData=()=>{

        const encodedToken=localStorage.getItem("userToken");
        if(encodedToken){
        
        const decodedToken=jwtDecode <User>(encodedToken)
        console.log(decodedToken);
        
        setUserData(decodedToken);
        console.log(userData);


    }

}
useEffect(()=>{
    if(localStorage.getItem("userToken")){
        saveUserData()
    }
},[]

)

return(
<AuthContext.Provider value={{userData,saveUserData}}>{children}</AuthContext.Provider>
)


}