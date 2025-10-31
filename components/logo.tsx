import Link from 'next/link'


const Logo = () => {
  
  return (
    <>
    <div className='text-3xl w-full  text-center   h-fit '>
     
<Link href="/" className='  duration-300 ease-in-out   '>
{/* <Image className='mix-blend-screen bg-blend-color ' src="/logo.jpg" alt="logo" width={50} height={50} /> */}

<span style={{
  color:'#41270b'
}} className='text-shadow-primary-foreground fontPoppins text-2xl  md:text-4xl xl:text-5xl   '>BEE</span>
<span className=" text-3xl font-bold  ml-2" style={{textShadow: '0 0 8px #41270b, 0 0 16px #41270b' ,color:'#41270b'}}>.</span>
{/* <span className='text-primary  text-shadow-2xs  p-2 text-shadow-primary  '>.</span> */}
</Link>
        

    </div>
    </>
  )
}

export default Logo