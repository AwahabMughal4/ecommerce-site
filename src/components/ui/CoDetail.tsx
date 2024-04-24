
function CoDetail(props:{headi:string,desc:string, descs:string }) {
  return (
    <div className='flex-1'>
    <h3 className='mt-5 text-lg font-bold'>{props.headi}</h3>
    <p className='py-3 font-semibold text-md'>{props.desc} <br />{props.descs}</p>
    
    </div>
  )
}

export default CoDetail