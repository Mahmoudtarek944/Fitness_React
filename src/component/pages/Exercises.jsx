import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function Exercises({ exercise, search }) {
  if (!exercise || exercise.length === 0) {
    return <h4></h4>;
  }
  // console.log(exercise);

  // console.log(search);
  return (
    <>
      <h2 className="text-black ms-1 mt-5">
        Showing Results of :
        <span className="text-decoration-underline">
          {search ? search.toUpperCase() : "General Exercise"}
        </span>
      </h2>
      <h6>You Can Choose The Body Part From Search</h6>
      <div className="row mt-4 justify-content-center align-items-center text-center">
        {exercise.map((ex) => (
          <Card
            key={ex.id}
            className="mb-3 col-lg-4 col-md-6 col-sm-6 d-flex flex-column justify-content-evenly gap-4 border-0 align-items-center text-center "
          >
            <Card.Img
              variant="top"
              src={`/api/exercise-image?id=${ex.id}`}
              loading="lazy"
              className="card-img w-50 d-flex justify-content-center"
            />
            <Card.Body className="d-flex flex-column gap-2">
              <Card.Title className="fw-bold fs-6 text-center">
                {ex.name.toUpperCase()}
              </Card.Title>
              <Card.Text className="d-flex gap-3 justify-content-center btnCard">
                <span className="text-dark fw-medium mt-1">Equipment : </span>
                <button className="btn btn-success opacity-75 fs-6 ">
                  {ex.equipment.toUpperCase()}
                </button>
              </Card.Text>
              <Link to={`/details/${ex.id}`}>
                <button className="btn btn-light px-1 fs-6">
                  More Details
                </button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Exercises;
