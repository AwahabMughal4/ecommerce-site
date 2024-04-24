import Wrapper from "@/components/shared/Wrapper"
import { Products } from "@/utils/mock"
import { StaticImageData } from "next/image";
import ProductCard from "@/components/ui/ProductCard"



const getProductByCategory = (category: string) => {
    return Products.filter((product) =>
        product.category === category);
    
};


export default function Page({ params }: { params: { slug: string } }) {
    const result = getProductByCategory(params.slug);
    return (
        <Wrapper>

            <div className="flex flex-col flex-wrap items-center mt-16 justify-evenly md:flex-row">
                {
                    result.length > 0 ?
                        result.map((product) => (
                            <ProductCard
                                key={product.id}
                                title={product.name}
                                price={product.price}
                                img={product.image as StaticImageData}
                                category={product.category}
                                id={0}
                            // id={produc}
                            />


                        )) : <p>No Products Found</p>

                }
            </div>

        </Wrapper>
    )
}