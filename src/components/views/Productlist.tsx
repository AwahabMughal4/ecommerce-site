import ProductCard from "@/components/ui/ProductCard"
import Wrapper from "@/components/shared/Wrapper"
import { Products } from "@/utils/mock"
import { StaticImageData } from "next/image";
// import { Check } from "lucide-react"
const Productlist = () => {
  const checkProduct = Products.slice(0, 3);
  return (
    <Wrapper>
      <div className="mt-10 max-screen-xl ">
        <div className="items-center ">
          <h3 className="text-xl font-semibold text-blue-700">Products</h3>
          <p className="text-3xl font-semibold"> Check What We Have</p>
        </div>
        <div className="flex flex-col items-center mt-16 justify-evenly md:flex-row">
          {
            checkProduct.map((product) => (
              <ProductCard key={product.id}
                title={product.name}
                price={product.price}
                img={product.image as StaticImageData}
                category={product.category}
                id={product.id}
                />
                


            ))}


          {/* <ProductCard title="abc" price={34} img={event5}/>
    <ProductCard title="abcd" price={344} img={e9}/>
    <ProductCard title="abcf" price={345} img={e8}/> */}


        </div>
      </div>
    </Wrapper>
  )
}

export default Productlist