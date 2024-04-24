import Image from "next/image"
import event1 from "public/event1.webp"
import event3 from "public/event3.webp"
import event2 from "public/event2.webp"
import { Button } from "@/components/ui/button"
import  Wrapper from "@/components/shared/Wrapper"
const Productdisc = () => {
    return (
        <Wrapper>
        <section className="mt-10 max-screen-xl">
            <ul className="gap-3 text-center my-7 ">
                <li className="text-2xl font-semibold text-blue-700">Promotions</li>
                <li className="text-4xl font-semibold"> Our Promotions Events</li>
            </ul>
            <div className="flex flex-col gap-2 lg:flex-row">
                <div className="flex-1 ">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex-1 px-8 py-8 bg-gray-300 ">

                            <h2 className="text-2xl font-bold md:text-5xl">GET UP TO 60%</h2>
                            <p className="py-3 text-2xl ">For the summer season</p>

                        </div>
                        <div className="flex-1 bg-gray-300" >
                            <Image src={event1} alt="event1" className=""></Image>
                        </div>
                    </div>
                    {/* SS */}
                    <div className="items-center py-10 mt-2 bg-gray-700 px-7 md:mt-2">
                        <h2 className="text-2xl font-bold text-slate-100 md:text-5xl">GET 30% off</h2>
                        <p className="p-4 text-lg text-slate-100">USE PROMO CODE</p>
                        <Button className="px-5 py-1.5 text-lg">DINEWEEKENDSALE</Button>
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-3 md:flex-row">
                    <div className="flex-1 text-center bg-gray-300">
                       
                        <Image src={event3} alt="event3" className="py-10 mx-auto "></Image>
                        <h3 className="text-xl font-semibold ">Flex Sweatshirt</h3>
                        <p className="text-2xl font-bold ">$100</p>
                    </div>
                    <div className="flex-col flex-1 md:flex-row">
                        <div className="flex-1 text-center bg-slate-300">
                          
                            <Image src={event2} alt="event2" className="py-10 mx-auto "></Image>
                            <h3 className="text-xl font-semibold ">Flex Sweatshirt</h3>
                            <p className="pb-5 text-2xl font-bold">$100</p>
                        </div>

                    </div>
                </div>
            </div>

        </section>
        </Wrapper>
    )
}

export default Productdisc