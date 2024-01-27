import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useUsers } from "../hooks/useUsers"

export function UsersList() {
    const { inView, ref } = useInView()
    const { isLoading, isError, users, fetchNextPage, hasNextPage } = useUsers()

    useEffect(() => {
        if (inView && hasNextPage) fetchNextPage()
    }, [inView])

    if (isLoading) return <strong>Cargando...</strong>
    if (isError) return <strong>ERROR</strong>
    return (
        <table width='100%'>
            <thead>
                <tr>
                    <th>Foto</th>
                    <th className="pointer">Nombre</th>
                    <th className="pointer">Apellido</th>
                    <th className="pointer">Pais</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => {
                        return (
                            <tr key={user.email} ref={ref}>
                                <td>
                                    <img src={user.picture.thumbnail} />
                                </td>
                                <td>
                                    {user.name.title}. {user.name.first}
                                </td>
                                <td>
                                    {user.name.last}
                                </td>
                                <td>
                                    {user.location.country}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}