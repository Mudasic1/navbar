import Link from "next/link"

const nav = () => {
  return (
    <header>
    <div className="overflow-hidden flex text-gray-500 space-x-9  md:m[0] my-4 p-4">
        <div className="flex space-x-1 text-1xl cursor-pointer">
        <img src="https://asset.gecdesigns.com/img/logo-design-vector-templates/alphabet-letter-m-logo-design-1675174056011-icon.webp" alt="Md" className="h-10 w-10 rounded-full -mt-2" />
        <span className="text-1xl text-black -space-x-10 hover:underline"><b>Mudasir Chandio</b></span>
        </div>
        <a href={"http://localhost:3000/"} className="hover:text-blue-500">Home</a>
        <Link href="./about" className="hover:text-pink-500">About Us</Link>
        <Link href={"http://localhost:3000/contact.tsx"} className="hover:text-green-500">Contact Us</Link>
        <Link href={"http://localhost:3000/privacy.tsx"} className="hover:text-purple-500">Privacy Policy</Link>
    </div>
     <div className="overflow-hidden flex justify-end mx-4 -mt-16 space-x-6">
     {/* buttons */}
     <button className="px-4 py-1 rounded-md text-white bg-blue-500 hover:bg-blue-700 ">
         login
     </button>
     <button className="px-4 py-1 rounded-md text-white bg-green-500 hover:bg-green-700">Sign up</button>
 </div>
 </header>
  )
}

export default nav
