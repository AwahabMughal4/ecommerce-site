import CoDetail from "@/components/ui/CoDetail"
import e9 from "public/e9.png"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Wrapper from "@/components/shared/Wrapper"


function Details() {
  return (
    <Wrapper>
      <div className="flex mt-16 max-screen-xl">
        <div className="px-16 py-8 "><CoDetail headi="Using Good Quality Materials" desc="Lorem ipsum dolor sit amt," descs=" consectetur adipiscing elit" />
        </div>
        <div className="px-16 py-8 "><CoDetail headi="Using Good Quality Materials" desc="Lorem ipsum dolor sit amt," descs=" consectetur adipiscing elit" />
        </div>

        <div className=" px-7"><Image src={e9} alt="eu" width={"700"} height={"1000"}></Image>
        </div>
        <div className="mt-10 "><span className="text-lg ">This piece is ethically crafted in <br />our small owned workshop in<br /> Peru with unmatched attention<br /> to care.  The Natural color is the actual natural color of the<br /> fiber, undyed and 100% traceable.
        </span><br /><Button className="px-6 py-4 mt-5">See All Products</Button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Details