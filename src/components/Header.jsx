import { useState } from "react"
import logo from "../img/movielogy.png"
import { BsFillPeopleFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { AiFillCloseCircle } from "react-icons/ai"

export function Header() {

    const [user, setUser] = useState(false);

  return (
    <div>
        <nav className=" fixed w-full flex justify-between items-center p-2 px-24 bg-black/40">
            <Link className=" cursor-pointer" to='/'>
                <img src={logo} alt="logoImage" width='150px' />
            </Link>
            <div className=" text-orange-700 text-2xl cursor-pointer" onClick={()=>setUser(!user)}>
                <BsFillPeopleFill />
        </div>
        </nav>

        {
            user && <div className=" top-0 left-0 bottom-0 right-0 bg-black/70 fixed 
            flex justify-center items-center">
                <form className=" bg-white py-2 px-5 text-center w-[20rem] rounded" >
                    <div className=" text-gray-900 font-bold text-[20px]">Login</div>
                    <input type="email" placeholder="Enter Your Email " className=" w-[100%] rounded p-[.1rem]
                     border-[1.5px] border-orange-700 my-[.2rem] text-[.7rem]" />
                     <input type="password" placeholder="Enter Your Password" className=" w-[100%] rounded p-[.1rem]
                     border-[1.5px] border-orange-700 my-[.2rem] text-[.7rem]" />
                     <input type="submit" value="Login Now" className="p-[.1rem] bg-orange-700 text-white 
                     rounded w-[100%] cursor-pointer my-[.2rem] text-[.7rem]" />
                     <input type="checkbox" /> <span className=" text-[.7rem]">Remember me</span>
                     <div className=" text-[.7rem]">
                     Forgot Password? <a href="#" className=" text-orange-700">Click Here</a>
                     </div>
                     <div className="text-[.7rem]" >
                     Dont Have An Account <a href="#" className=" text-orange-700">Register Now</a>
                     </div>   
                </form>

                <div>
                    <AiFillCloseCircle className=" text-white text-2xl absolute top-4 
                    right-6 cursor-pointer"
                    onClick={() => setUser(false)} />
                </div>

            </div>
        }

    </div>
  )
}
