import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useCan } from "../hooks/useCan"
import { api } from "../services/api"


export default function Dashboard() {
    const { user } = useContext(AuthContext)
    const userCanSeeMetrics = useCan({
        permissions: ['metrics.list']
    })
    useEffect(() => {
        api.get('me').then(response => console.log(response))
            .catch(err => console.log(err))
    })
    return (
        <>
            <h1>Dashboard: {user?.email}</h1>
            {userCanSeeMetrics && <div>Métricas</div>}
        </>

    )
}