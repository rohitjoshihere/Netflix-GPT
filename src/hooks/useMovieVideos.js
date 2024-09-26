import { useDispatch } from "react-redux";
import { api_option } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieVideos = () => {
    const dispatch = useDispatch()
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/957452/videos?language=en-US", api_option)
        const json = await data.json();

        const filterData = json.results.filter((video) => video.type == "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]
        dispatch(addTrailerVideo(trailer))
        console.log(trailer)
    }
    
    useEffect(() => {
        getMovieVideos()
    }, [])
}

export default useMovieVideos;