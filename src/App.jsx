import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ShopProvider } from './context/ShopContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import CustomOrders from './pages/CustomOrders'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import AdminAddProducts from './pages/AdminAddProducts'

export default function App() {
  return (
    <ShopProvider>
      <BrowserRouter
        basename={
          import.meta.env.BASE_URL === '/'
            ? undefined
            : import.meta.env.BASE_URL.replace(/\/$/, '')
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="about" element={<About />} />
            <Route path="custom-orders" element={<CustomOrders />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="admin/add-products" element={<AdminAddProducts />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  )
}
