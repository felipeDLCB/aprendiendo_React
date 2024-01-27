//const delay = async (ms) => await new Promise(resolve => setTimeout(resolve, ms))
export const fetchUsers = async ({ pageParam }) => {
    //const response = await fetch('https://randomuser.me/api?results=10&seed=felipe&page'+pageParam);
    //return await response.json();
    return await fetch(`https://randomuser.me/api?results=10&seed=felipe&page=${pageParam}`)
        .then(async res => {
            if (!res.ok) throw new Error('Error en la petición')
            return await res.json()
        })

        .then(res => {
            const currentPage = res.info.page
            const nextCursor = currentPage > 10 ? undefined : currentPage + 1
            console.log(nextCursor)

            return {
                users: res.results,
                nextCursor
            }
        })

}