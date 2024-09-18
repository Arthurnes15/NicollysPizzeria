import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextprovider";

export const DefaultLayout = () => {
    const { user, token } = useStateContext()
    if (!token) {
        return <Navigate to='/login' />
    }
    
    return(
        <>
            <h1>Default</h1>
            <Outlet />
        </>
    )
}