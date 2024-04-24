import Wrapper from "@/components/shared/Wrapper"
import { Products } from "@/utils/mock"
import { StaticImageData } from "next/image";
import ProductCard from "@/components/ui/ProductCard"


const getProductDetail = (id: number|string) => {
    return Products.filter((product) =>
        product.id=== id);
};


export default function Page({ params }: { params: { id: string  } }) {
    const result = getProductDetail(params.id);
    return ( 
        <Wrapper>
           
           <div className="flex flex-col flex-wrap items-center mt-16 justify-evenly md:flex-row">
            {/* {
                result.length>0 ? 
                    result.map((product) => (
                        <ProductCard key={product.id}
                         title={product.name} 
                         price={product.price}
                          img={product.image as StaticImageData}
                           category={product.category} />


                    )):<p>No Products Found</p>  

            } */}
            this is product page for product id={params.id};
                           </div> 
           
        </Wrapper>
    )
}