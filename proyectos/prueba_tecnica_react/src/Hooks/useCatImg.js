import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImg({ fact }) {
    const [imageUrl, setImgUrl] = useState()

    useEffect(() => {
        // no se pudo hacer con otro fetch porq la API cambio 
        // y ya no devuelve la url 

        if (!fact) return

        const frase = fact.split(' ', 3).join('%20')
        const url = `/cat/says/${frase}?fontSize=50&fontColor=white`
        setImgUrl(url)

    }, [fact])

    return { imgUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}