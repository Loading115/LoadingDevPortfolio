import { RouterProvider } from "react-router"
import { appRouter } from "./app.router"

export const LoadingDevPortfolio = () => {
  return (
    <RouterProvider router={appRouter}/>
  )
}
