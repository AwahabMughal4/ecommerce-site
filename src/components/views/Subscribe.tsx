import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"

const Subscribe = () => {
  return (
    <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold ">Subscribe Our Newsletter</h3> 
        <p className="m-3 text-xl">Get the latest information and promo offers directly</p>
        <span className="flex justify-center mt-2"><Input className="border border-indigo-500 h- w-17" type="text" placeholder="Input Email Address"/><Button className="mx-4 ">Get Started</Button></span>
    </div>
  )
}

export default Subscribe