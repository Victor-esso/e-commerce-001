import routes from "./routes"
import { useRoutes } from "react-router-dom"

const WebsiteRoutes = () => {
  return useRoutes(routes)
}

function App() {
  return (
    <>
      <WebsiteRoutes />
    </>
  )
}

export default App
