import { useCatFact } from "./Hooks/useCatFact"
import { useCatImg } from "./Hooks/useCatImg"


export function App () {
    const {fact, refreshFact} = useCatFact()
    const { imgUrl } = useCatImg({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de Gatitos</h1>
            <button onClick={handleClick}>Actualizar curiosidad</button>
            {fact && <p>{fact}</p>}
            {imgUrl && <img src={imgUrl}/>}

        </main>
    )
}

