import routes from "./routes"
import { useRoutes } from "react-router-dom"
import PageContainer from "@components/PageContainer"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow'

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
