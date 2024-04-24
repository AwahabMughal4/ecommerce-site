
import logo from "/public/Logo.webp"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { ShoppingCart } from "lucide-react"
import Wrapper from "@/components/shared/Wrapper"

const Header = () => {
  return (
    <Wrapper>
      <div className="flex items-center justify-between py-6 max-screen-xl">
        <Link href={'/'}>
        <Image src={logo} alt="logo" className="w-40"></Image>
        </Link>
        <ul className="flex gap-x-10">
          <li className="text-lg"> <Link href={"category/female"}>Female</Link> </li>
          <li className="text-lg"> <Link href={"category/male"}>Male</Link> </li>
          <li className="text-lg"> <Link href={"category/kids"}>Kids</Link></li>
          <li className="text-lg"> <Link href={"/products"}>All Products</Link></li>
        </ul>
        <div className="flex items-center justify-center ">
          <Search className="mr-2 "></Search><Input type="text" placeholder="search" />
        </div>
        <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full">
          <ShoppingCart />
        </div>
      </div>
    </Wrapper>
  )
}

export default Header   