import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Root from "./components/Root"
import Index from "./pages/Index"
import About from "./pages/About"
import StepOnePage from "./pages/FormPages/StepOnePage"
import StepTwoPage from "./pages/FormPages/StepTwoPage"
import StepThreePage from "./pages/FormPages/StepThreePage"
import Error from "./pages/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/create/1",
        element: <StepOnePage />,
      },
      {
        path: "/create/2",
        element: <StepTwoPage />,
      },
      {
        path: "/create/3",
        element: <StepThreePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
])

function App() {
  return (
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  )
}

export default App
