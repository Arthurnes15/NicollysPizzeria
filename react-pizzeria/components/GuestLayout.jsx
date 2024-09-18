import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contexts/contextprovider";

export const GuestLayout = () => {
    const { token } = useStateContext()
    if (token) {
        return <Navigate to='/home' />
    }
    return(
        <>
            <Outlet />
        </>
    )
}