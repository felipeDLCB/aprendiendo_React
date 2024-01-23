import { products as initialProducts } from './mocks/products-alter.json'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'
//import { Footer } from './components/Footer.jsx'

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App