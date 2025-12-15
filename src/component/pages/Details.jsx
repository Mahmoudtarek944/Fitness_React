import BodyPart from "../../assets/body-part.png";
import Target from "../../assets/target.png";
import Equipment from "../../assets/equipment.png";
import { useParams } from "react-router-dom";
function Details({ exerciseDetail }) {
  const { id } = useParams();

  if (!exerciseDetail || !exerciseDetail.name) {
    return <p className="text-center">Loading exercise details...</p>;
  }

  // console.log(exerciseDetail);
  return (
    <>
      <div className="container mt-3 d-flex justify-content-evenly">
        <img
          src={`/api/exercise-image?id=${id}`}
          className="imgDetalis"
          alt=""
        />
        <div className="d-flex flex-column gap-2 mt-4">
          <h3 className="text-capitalize">{exerciseDetail.name}</h3>
          <h6 className="fw-normal text-dark text-capitalize ">
            Exercises keep you Strong {exerciseDetail.name} <br />
            bup is one of the best <br /> exercises to target your{" "}
            {exerciseDetail.target}. It will help you improve your <br /> mood
            and gain energy.
          </h6>
          <div className="d-flex flex-column gap-4 mt-3">
            <div className="d-flex gap-4 text-center align-items-center">
              <img
                src={BodyPart}
                alt=""
                className="bg-details rounded-circle p-2"
              />
              <h5 className="text-capitalize">{exerciseDetail.bodyPart}</h5>
            </div>
            <div className="d-flex gap-4 text-center align-items-center">
              <img
                src={Target}
                alt=""
                className="bg-details rounded-circle p-2"
              />
              <h5 className="text-capitalize">{exerciseDetail.target}</h5>
            </div>
            <div className="d-flex gap-4 text-center align-items-center">
              <img
                src={Equipment}
                alt=""
                className="bg-details rounded-circle p-2"
              />
              <h5 className="text-capitalize">{exerciseDetail.equipment}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
