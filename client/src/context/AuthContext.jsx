import{createContext, useContext, useState} from "react";
import{registerRequest} from "../api/auth";

export const AuthContext = createContext();

export const useAuth =  () =>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setError] = useState([]);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error);
        }
    }

    const login = async (user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data.user);
            setIsAuthenticated(true);
            setError([]);
        } catch (error) {
            setError(error.response.data);
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            signup,
            errors
            }}>
            {children}
        </AuthContext.Provider>
    )

}
