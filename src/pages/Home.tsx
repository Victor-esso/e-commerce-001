import BannerGrid from "@components/BannerGrid"
import NewArrivals from "@components/NewArrivals"
import SliderSection from "@components/SliderSection"

const Home = () => {
  return (
    <section className="webpage">
      <SliderSection/>
      <BannerGrid />
      <NewArrivals/>
    </section>
  )
}

export default Home