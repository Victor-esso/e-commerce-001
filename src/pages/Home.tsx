import BannerGrid from "@components/BannerGrid"
import NewArrivals from "@components/NewArrivals"
import SliderSection from "@components/SliderSection"
import ValuesSection from "@components/ValuesSection"

const Home = () => {
  return (
    <section className="webpage">
      <SliderSection/>
      <BannerGrid />
      <NewArrivals/>
      <ValuesSection />
    </section>
  )
}

export default Home