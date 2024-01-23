import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'
import '../css/Filters.css'

export function Filters() {
    const { filters, setFilters } = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangePrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        //TODO mejorar esta funcion
        // ⬇️ ESTO HUELE MAL
        // estamos pasando la función de actualizar estado
        // nativa de React a un componente hijo
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangePrice}
                    value={filters.minPrice} 
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="jewelery">Joyeria</option>
                    <option value="electronics">Electronica</option>
                    <option value="women's clothing">Ropa para mujeres</option>
                    <option value="men's clothing">Ropa para hombres</option>
                </select>
            </div>
        </section>
    )
}