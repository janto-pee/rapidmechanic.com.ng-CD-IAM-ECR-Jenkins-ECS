import Layout from "../Layout/Layout";
import { Blog, ServiceGrid } from "../component";
import HomeContact from "../component/home/HomeContact";
import PortfolioSection from "../component/home/PortfolioSection";

export default function Home() {
  return (
    <>
    <Layout title="Home" homelayout>
      <ServiceGrid />
      <PortfolioSection />
      <Blog />
      <HomeContact />
    </Layout>
    </>
  )
}
