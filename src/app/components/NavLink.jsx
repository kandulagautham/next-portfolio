import Link from "next/link";
const NavLink=({href,title})=>{
    return(
        <a href={href}>
        <h1  className='="block py-2 pl-3 pr-4 text-gray-600 sm:text-xl rounded md:p-0 hover:text-white'>{title}</h1>
        </a>
    );
};

export default NavLink;