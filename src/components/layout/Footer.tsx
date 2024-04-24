import logo from "public/Logo.webp"
import Image from "next/image"
import Wrapper from "@/components/shared/Wrapper"
function Footer() {
    return (
        <Wrapper>

            <div className="mt-20 ">
                <div className="flex items-center justify-between px-8 py-6">
                    <div className="">
                        <Image src={logo} alt="logoe" className="h-7 w-17"></Image>
                        <p className="mt-4 text-lg">Small, artisan label that offers a thoughtfully curated <br /> collection of high quality everyday essentials made.</p>
                    </div>

                    <ul className="">
                        <h3 className="font-bold">Company</h3>
                        <li>About</li>
                        <li>Terms of use</li>
                        <li>Policy</li>
                        <li>How it works</li>
                        <li>Contact us</li>
                    </ul>
                    <ul className="">
                        <h3 className="font-bold">Company</h3>

                        <li>About</li>
                        <li>Terms of use</li>
                        <li>Policy</li>
                        <li>How it works</li>
                        <li>Contact us</li>
                    </ul>
                    <ul className="">
                        <h3 className="font-bold">Company</h3>

                        <li>About</li>
                        <li>Terms of use</li>
                        <li>Policy</li>
                        <li>How it works</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="h-1 bg-slate-800"></div>

                {/* second */}
                <div className="flex gap-16 pt-7">

                    <p className="flex-1">Copyright © 2022 Dine Market</p>
                    <p className="flex-1 text-center">Design by. <span className="text-lg font-semibold">Weird Design Studio</span></p>
                    <p className="flex-1 text-end">Code by.  <span className="text-lg font-semibold"> on github</span></p>
                </div>
                <div className="h-1 mt-5 mb-5 bg-slate-800"></div>

            </div>
        </Wrapper>
    )
}


export default Footer