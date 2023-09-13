import web3D from '../assets/images/image-web-3-desktop.jpg'

const Section1 = () => {
   return (
      <section className="col-span-2 flex flex-col justify-start gap-8">
         <div className="overflow-hidden relative flex-1">
            <img src={web3D} alt="web3_m" className="absolute top-0 left-0 w-full h-full object-cover" />
         </div>
         <div className="grid grid-cols-2">
            <h1 className="text-6xl font-extrabold text-[#00001a]">The Bright <br /> Future of <br /> Web 3.0?</h1>
            <div className="flex flex-col gap-8 px-5">
               <p className="text-base text-[#5d5f79]">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
               <div>
                  <button className="uppercase bg-[#f15e50] hover:bg-[#00001a] text-white font-bold tracking-[.2rem] px-8 py-4">Read more</button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Section1
