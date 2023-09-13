import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";


const Main = () => {
   return (
      <main className="flex flex-col gap-20">
         <div className="grid grid-cols-3 gap-8">
            <Section1 />
            <Section2 />
         </div>
         <Section3 />
      </main>
   )
}

export default Main
