import Details from "./Details";
import SimilarExercises from "./SimilarExercises";
import VideoDetails from "./VideoDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { exerciseOptions, getData } from "../../utils/fetchData";
function ExercisesDetails() {
  const { id } = useParams();

  console.log(id);

  const [exercisesDetail, setExercisesDetail] = useState({});

  useEffect(() => {
    async function fetchExcerciseDetail() {
      const exerciseURL = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const fetchDataDetails = await getData(
        `${exerciseURL}/exercises/exercise/${id}`,
        exerciseOptions
      );

      console.log(fetchDataDetails);
      setExercisesDetail(fetchDataDetails);
    }
    fetchExcerciseDetail();
  }, [id]);

  return (
    <>
      <Details exerciseDetail={exercisesDetail} />
      {/* <VideoDetails videoDetails = {youtubeSearchUrl}/> */}
      <SimilarExercises />
    </>
  );
}

export default ExercisesDetails;
