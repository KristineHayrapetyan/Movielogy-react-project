import { useEffect, useState } from "react";
import { getShowsById } from "../api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export function ShowDetailPage() {

  const [show, setShow] = useState({});

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getShowsById(id).then(data => {
      setShow(data);
    })
  }, []);


  return (
    <div className=" p-8 pt-[9rem]">
      <div className=" flex justify-center items-center gap-14">

        <img src={show.image?.medium} alt="showImg" />

        <div>
          <div className=" flex justify-between items-center text-white bg-gray-900 p-2">
            Show Name: <span>{show.name}</span>
          </div>
          <div className=" flex justify-between items-center text-white p-2">
            Show Language: <span>{show.language}</span>
          </div>
          <div className=" flex justify-between items-center text-white bg-gray-900 p-2">
            Country: <span>{show.network?.country?.name}</span>
          </div>
          <div className=" flex justify-between items-center text-white p-2">
            Time: <span>{show.schedule?.time}</span>
          </div>
          <div className=" flex justify-between items-center text-white bg-gray-900 p-2">
            Genre: <span>{show.genres?.join(', ')}</span>
          </div>

        </div>
      </div>

      <div className=" text-center my-10">
        <div className=" text-white text-[2rem]">About <span className=" text-red-700">
          Show</span> </div>
        <p className=" text-white">{show.summary?.slice(3, -4)}</p>
        <button className=" bg-red-700 p-2 rounded text-white my-5"
          onClick={() => navigate('/shows/' + show.id + '/cast')}>
          Cast</button>
      </div>

    </div>
  )
}
