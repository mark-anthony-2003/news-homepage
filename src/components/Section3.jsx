import imgRetro from '../assets/images/image-retro-pcs.jpg'
import imgTop from '../assets/images/image-top-laptops.jpg'
import imgGaming from '../assets/images/image-gaming-growth.jpg'

const Section3 = () => {
   const newsItems = [
      {
         newsImg: imgRetro,
         count: "01",
         title: "Reviving Retro PCs",
         description: "What happens when old PCs are given modern upgrades?"
      },
      {
         newsImg: imgTop,
         count: "02",
         title: "Top 10 Laptops of 2022",
         description: "Our best picks for various needs and budgets."
      },
      {
         newsImg: imgGaming,
         count: "03",
         title: "The Growth of Gaming",
         description: "How the pandemic has sparked fresh opportunities."
      },
   ]

   return (
      <section className="grid grid-cols-3 gap-10">
         { newsItems.map((newsItem, newsIndex) => (
            <div key={newsIndex} className="grid grid-cols-3 gap-5 mb-10 h-36">
               <div className="col-span-1 overflow-hidden relative">
                  <img src={newsItem.newsImg} alt={newsItem.title} className="absolute top-0 left-0 w-full h-full object-cover" />
               </div>
               <div className="col-span-2 flex flex-col justify-between">
                  <h2 className="text-4xl text-[#c5c6ce] font-bold">{newsItem.count}</h2>
                  <h3 className="text-[#00001a] hover:text-[#f15e50] text-xl font-bold cursor-pointer">{newsItem.title}</h3>
                  <p className="text-[#5d5f79] text-base leading-6">{newsItem.description}</p>
               </div>
            </div>
         ))}
      </section>
   )
}

export default Section3
