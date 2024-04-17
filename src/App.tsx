import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Root from "./layouts/Root"
import Index from "./pages/Index"
import About from "./pages/About"
import StepOnePage from "./pages/FormPages/StepOnePage"
import StepTwoPage from "./pages/FormPages/StepTwoPage"
import StepThreePage from "./pages/FormPages/StepThreePage"
import StepFourPage from "./pages/FormPages/StepFourPage"
import StepFivePage from "./pages/FormPages/StepFivePage"
import PdfResult from "./pages/PdfResult"
import React from "react"

import { ComponentType } from "react"

const Error = React.lazy<ComponentType<any>>(() => import("./pages/Error"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        index: true,
        element: <Index />,
      },
      {
        path: "/pdf",
        element: <PdfResult />,
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
