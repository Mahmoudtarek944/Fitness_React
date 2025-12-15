import Card from "react-bootstrap/Card";
import gymImage from "../../assets/gym.png";
import { useRef } from "react";

import leftDirection from "../../assets/left-arrow.png";
import rightDirection from "../../assets/right-arrow.png";

function ScrollSearch({ data }) {
  // console.log(data);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const width = scrollRef.current.offsetWidth;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -width, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: width, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="carousel-wrapper position-relative d-flex">
        <button className="carousel-btn left" onClick={() => scroll("left")}>
          <img src={leftDirection} alt="" />
        </button>

        <div ref={scrollRef} className="carousel-container d-flex gap-3 py-4">
          {data.map((item, index) => (
            <Card
              style={{ width: "13rem" }}
              key={index}
              className="scroll-card d-flex flex-column align-items-center pt-3 justify-content-center card"
            >
              <Card.Img variant="top" src={gymImage} className="w-25" />
              <Card.Body>
                <Card.Title className="fw-bold fs-6">
                  {item.toUpperCase()}
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>

        <button className="carousel-btn right" onClick={() => scroll("right")}>
          <img src={rightDirection} alt="" />
        </button>
      </div>
    </>
  );
}

export default ScrollSearch;
