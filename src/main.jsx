import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './pages/home/home.page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/rootLayout/root.layout';
import CartPage from './pages/cart/cart.page';
import CheckoutPage from './pages/checkout/checkout.page';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },      
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/checkout",
        element: <CheckoutPage />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
