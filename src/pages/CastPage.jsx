import { useEffect } from "react";
import { useState } from "react";
import { getShowCast } from "../api"
import { useParams } from "react-router-dom";
import { CastList } from "../components/CastList";
import { useNavigate } from "react-router-dom";


export function CastPage() {

  const [cast, setCast] = useState([]);

  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(()=>{
    getShowCast(id).then(data => {
      console.log(data);
      setCast(data);
    })
  }, []);


  return (
    <div className=" p-2 pt-[4rem]">
        <button className=" bg-red-500 text-white p-1 rounded" onClick={()=>navigate(-1)}>Back</button>
      <div className=" font-bold text-white text-[2rem] text-center">Cast</div>
      <CastList cast={cast} />
    </div>
  )
}
