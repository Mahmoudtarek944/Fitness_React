import { useEffect, useState } from "react";
import { exerciseOptions, getData } from "../../utils/fetchData";

import ScrollSearch from "./ScrollSearch";
import Exercises from "./Exercises";

function SearchExercises() {
  const [search, setSearch] = useState("");

  const [exercises, setExercises] = useState([]);

  const [bodyPart, setBodyPart] = useState([]);

  useEffect(() => {
    async function fetchExerciesData() {
      const bodyData = await getData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      // console.log(bodyData);
      setBodyPart(bodyData);
    }

    fetchExerciesData();

    async function handelData() {
      const exercisesData = await getData(
        `https://exercisedb.p.rapidapi.com/exercises`,
        exerciseOptions
      );
      setExercises(exercisesData);
    }
    handelData();
  }, []);

  async function handelData() {
    if (search) {
      const exercisesData = await getData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search}`,
        exerciseOptions
      );
      setExercises(exercisesData);
    }
  }

  // console.log(exercises);

  return (
    <>
      <div className="d-flex flex-column gap-4 justify-content-center text-center container mt-5">
        <h2 className="fw-bolder text-black mt-5">
          Awesome Exercises You Should Know
        </h2>
        <div className="d-flex justify-content-center">
          <input
            type="text"
            placeholder="Search Exercises"
            className="w-75 form-control border-dark rounded-0 fw-medium fs-5"
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
            value={search}
          />
          <button
            className="btn btn-danger rounded-0 text-light px-4 py-2"
            onClick={handelData}
          >
            Search
          </button>
        </div>
        <div className="container ">
          <ScrollSearch data={bodyPart}></ScrollSearch>
        </div>
        <div className="mt-4 ">
          <Exercises exercise={exercises} search={search}></Exercises>
        </div>
      </div>
    </>
  );
}

export default SearchExercises;
