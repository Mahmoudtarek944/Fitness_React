import imgBanner from "../../assets/banner.png";
function Banner() {
  return (
    <>
      <div className="d-flex justify-content-between container all-banner mb-5">
        <div className="d-flex flex-column gap-3 align-items-start banner container">
          <h4 className="fw-bolder text-danger">Fitness Club</h4>
          <h2 className="fw-bolder ">
            <pre>
              Sweat , Smile <br /> And Repeat
            </pre>
          </h2>
          <h5>Check out the most effective exercises personalized to you</h5>
          <button className="btn btn-danger text-light px-3 py-2 ">
            Explore Exercises
          </button>
        </div>
        <img src={imgBanner} className=" banner-img" alt="BannerPhoto" />
      </div>
    </>
  );
}

export default Banner;
