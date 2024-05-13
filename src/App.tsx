import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { lazy } from "react"

import Root from "./layouts/Root"
import Index from "./pages/Index"
import About from "./pages/About"
import StepOnePage from "./pages/FormPages/StepOnePage"
import StepTwoPage from "./pages/FormPages/StepTwoPage"
import StepThreePage from "./pages/FormPages/StepThreePage"
import StepFourPage from "./pages/FormPages/StepFourPage"
import StepFivePage from "./pages/FormPages/StepFivePage"
import PdfResultPage from "./pages/PdfResult"
const ErrorPage = lazy(() => import("./pages/Error"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        element: <Index />,
      },
      {
        path: "/pdf",
        element: <PdfResultPage />,
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
        path: "/create/4",
        element: <StepFourPage />,
      },
      {
        path: "/create/5",
        element: <StepFivePage />,
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
