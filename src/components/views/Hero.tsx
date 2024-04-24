import { Badge } from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import girl from "/public/girl.webp"
import Image from "next/image"
import {ShoppingCart} from "lucide-react"
import Wrapper from "@/components/shared/Wrapper"
function Hero() {
  return (
    <Wrapper>
    <section className="flex flex-col py-6 lg:flex-row gap-y-10">
      
      <div className="flex-1 ">
      <Badge className="px-6 py-3 text-blue-800 bg-blue-200 rounded-lg ">Sale 70%</Badge>
      <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 md:mt-6 scroll-m-20 md:text-7xl">
      An Industrial Take <br />on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-2 text-xl text-gray-600 px-1 p-1 md:mt-6">
        Anyone can beat you but no one can beat<br /> your outfit as long as you wear Dine outfits.
      </p>
      <Button className="py-3.5 px-4 mt-6"><ShoppingCart className="w-6 h-6 mx-2"></ShoppingCart><span className="text-lg">Start Shopping</span></Button>
      </div>


      <div className="flex-1 ">
      <Image src={girl} alt="logo" className="mx-auto bg-pink-100 rounded-full w-400" ></Image>
      
    </div>
    </section>
    </Wrapper>      
  )
}

export default Hero