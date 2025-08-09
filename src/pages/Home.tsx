import Banner from "@components/Banner"
import BannerGrid from "@components/BannerGrid"
import BlogSection from "@components/BlogSection"
import NewArrivals from "@components/NewArrivals"
import Newsletter from "@components/Newsletter"
import SliderSection from "@components/SliderSection"
import ValuesSection from "@components/ValuesSection"

const Home = () => {
  return (
    <section className="webpage">
      <SliderSection/>
      <BannerGrid />
      <NewArrivals/>
      <ValuesSection />
      <Banner/>
      <BlogSection/>
      <Newsletter />
    </section>
  )
}

export default Home