import footerImg from "../../assets/Logo-1.png";
function Footer() {
  return (
    <>
      <div className="py-3 mt-5 container d-flex flex-column gap-5 w-100 align-items-center text-center footer-bg rounded-4">
        <img src={footerImg} alt="" className="w-25 " />
        <h3 className="text-black">
          <pre>
            Made With <i class="bi bi-heart"></i> by Mahmoud Tarek{" "}
          </pre>
        </h3>
      </div>
    </>
  );
}

export default Footer;
