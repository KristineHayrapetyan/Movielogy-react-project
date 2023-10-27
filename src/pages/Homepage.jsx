import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export function Homepage() {

  const navigate = useNavigate();

  return (
    <div className="">
      <div className=" h-[500px] flex justify-center items-center flex-col">
        <div className=" text-white font-bold text-[2.5rem]
      ">Ready to watch? Let's Start!</div>

        <button className=" flex justify-center items-center gap-3 bg-red-600 
      p-2 rounded-full text-white font-bold" onClick={() => navigate('/shows')}>
          Get Started
          <BsFillArrowRightCircleFill />
        </button>

      </div>
    </div>
  )
}
