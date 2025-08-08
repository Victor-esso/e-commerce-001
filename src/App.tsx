import routes from "./routes"
import { useRoutes } from "react-router-dom"
import PageContainer from "@components/PageContainer"
import 'swiper/css';
import 'swiper/css/navigation'

const WebsiteRoutes = () => {
  return useRoutes(routes)
}

function App() {
  return (
    <PageContainer>
      <WebsiteRoutes />
    </PageContainer>
  )
}

export default App
