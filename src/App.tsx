import routes from "./routes"
import { useRoutes } from "react-router-dom"
import PageContainer from "@components/PageContainer"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
