
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image'
function ProductCard(props: {
  title: string;
  price: number;
  img: StaticImageData;
  category: string;
  id: number;

}) {
  return (

    <Link href={`/products/${props.id}`}>
      <div className='py-5'>
        <Image src={props.img} alt="no" height={"700"} width={"700"} className='w-80 md:h-80' ></Image>
        <h3 className='mt-3 text-xl font-bold '>{props.title}</h3>
        <p className='text-xl font-bold'>${props.price}</p>
        <p className='text-xl font-bold'>Category <span className="text-base font-normal capitalize">{props.category}</span> </p>
        {/* <p className='text-xl font-bold'>Id <span className="text-base font-normal capitalize">{props.id}</span> </p> */}
      </div>
    </Link>

  )
}

export default ProductCard