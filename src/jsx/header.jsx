import Logo from '../images/logo.png';
import {useState, useEffect} from 'react';

function header() {

   const [headerScroll, setHeaderScroll] = useState(true);
   let headerScrollY = window.scrollY;

   console.log(headerScrollY);

   const handleScroll = () => {
      if(window.scrollY > headerScrollY){
         setHeaderScroll(false);
      }else{
         setHeaderScroll(true);
      }
      headerScrollY = window.scrollY;
   };

   window.addEventListener("scroll", handleScroll);
   console.log(window.addEventListener("scroll", handleScroll));
   
   let headerClass = `sticky z-[999] top-0 w-full bg-gray-100 h-24 shadow-custom flex  w-full ease-out duration-300 ${headerScroll ? 'translate-y-[0]' : 'translate-y-[-100%]'}`;

   return(
   <header className={headerClass}>
      <div className='w-[20%] h-full flex items-center justify-center'>
         <img className='h-[80%]' src={Logo} alt="Logo" />
      </div>

      <nav className='h-full w-[60%] flex items-center justify-center gap-5'>
         <button className='buttonText text-custom'>Watches</button>
         <button className='buttonText text-custom'>Warranty & Services</button>
         <button className='buttonText text-custom'>Stores</button>
      </nav>

      <div className='h-full w-[20%]'></div>
   </header>
   )
}

export default header;