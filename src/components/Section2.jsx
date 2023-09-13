const Section2 = () => {
   const newsItems = [
      {
         title: "Hydrogen VS Electric Cars",
         description: "Will hydrogen-fueled cars ever catch up to EVs?"
      },
      {
         title: "The Downsides of AI Artistry",
         description: "What are the possible adverse effects of on-demand AI image generation?"
      },
      {
         title: "Is VC Funding Drying Up?",
         description: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
      },
   ]

   return (
      <section className="col-span-1 bg-[#00001a] px-5">
         <h1 className="text-[#e9ab53] text-5xl font-bold pt-8 pb-3">New</h1>
         { newsItems.map((newsItem, newsIndex) => (
            <div key={newsIndex} className={`${ newsIndex === newsItems.length - 1 ? "" : "border-b border-[#c5c6ce]" } py-8`}>
               <h2 className="text-white text-xl font-bold">{newsItem.title}</h2>
               <p className="text-base text-[#c5c6ce]">{newsItem.description}</p>
            </div>
         ))}
      </section>
   )
}

export default Section2
