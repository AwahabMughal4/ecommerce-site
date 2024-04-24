import Hero from "@/components/views/Hero"
// import Hero1 from "@/components/views/Productdisc"
import Details from "@/components/views/Details"
import Productlist from "@/components/views/Productlist"
import Headings from "@/components/views/Headings"
import Subscribe from "@/components/views/Subscribe"
import Productdisc from "@/components/views/Productdisc"
// import SlikSlider from "@/components/views/SlikSlider"
export default function page() {
  return (
    <div>
      
      <Hero/>
      < Productdisc/>
      {/* <SlikSlider/> */}
      <Productlist/>
      <Headings/>
      <Details/>
      <Subscribe/>
      
    </div>
  )
}
