import ProductCard from "@/components/ui/ProductCard"
import Wrapper from "@/components/shared/Wrapper"
import { Products } from "@/utils/mock"
import { StaticImageData } from "next/image";

const Allproducts = () => {
    const checkProduct = Products.slice(0, 6);

    return (
        <Wrapper>
            <div className="flex flex-col flex-wrap items-center mt-16 justify-evenly md:flex-row">
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
            </div>
        </Wrapper>
    )
};
export default Allproducts;