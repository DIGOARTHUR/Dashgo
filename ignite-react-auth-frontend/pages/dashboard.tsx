import { useContext, useEffect } from "react"
import { Can } from "../components/Can"
import { AuthContext } from "../contexts/AuthContext"
import { useCan } from "../hooks/useCan"
import { api } from "../services/api"


export default function Dashboard() {
    const { user,signOut,isAuthenticated } = useContext(AuthContext)
 
    useEffect(() => {
        api.get('me').then(response => console.log(response))
            .catch(err => console.log(err))
    })
    return (
        <>
            <h1>Dashboard: {user?.email}</h1>
            <button onClick={signOut}>Sign out</button>
            <Can permissions={['metrics.list']}>
            <div>Métricas</div>
            </Can>
            
        </>

    )
}