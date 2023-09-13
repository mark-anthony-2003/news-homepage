import logo from '../assets/images/logo.svg'

const Navbar = () => {

   const menus = [ "Home", "New", "Popular", "Trending", "Categories" ]

   return (
      <nav className="py-10 flex justify-between items-center">
         <div>
            <img src={logo} alt="logo" />
         </div>
         <ul className="flex items-center gap-10">
               { menus.map((menu, menuIndex) => (
                  <li key={menuIndex} className="text-[#5d5f79] hover:text-[#f15e50] cursor-pointer">{menu}</li>
               ))}
            </ul>
      </nav>
   )
}

export default Navbar
