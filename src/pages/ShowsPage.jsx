import { useEffect } from "react";
import { useState } from "react";
import { getShows } from "../api";
import { ShowsList } from "../components/ShowsList";
import { useNavigate } from "react-router-dom";


export function ShowsPage() {

  const [shows, setShows] = useState([]);


  const navigate= useNavigate();

  useEffect(()=>{
    getShows().then(data => {
      console.log(data);
      setShows(data);
    })
  }, [])

  return (
    <div className=" p-8 pt-[4rem]">
      <button className=" bg-red-500 text-white p-1 rounded my-2" onClick={()=>navigate(-1)}>Back</button>
      <ShowsList shows={shows} />
    </div>
  )
}
