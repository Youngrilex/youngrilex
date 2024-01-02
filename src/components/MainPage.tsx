import Contact from "./Contact";
import Navbar from "./Navbar";
import Offer from "./Offer";

export default function WholeApp() {
  return (
    <div>
      <Navbar />
      <article className="h-[100%] relative overflow-hidden">
        <img
          src="../assets/nn.jpg"
          alt=""
          className="w-[100%] h-[100%] relative"
        />
        <div className="absolute flex flex-col justify-center items-center text-white w-[100%] top-10 sm:top-0 bottom-0 left-0 right-0">
          {/* <h2 className="text-[#FFD700] text-[20px] sm:text-[50px] font-bold">
            YOUNGRILEX ARTWORK
          </h2> */}
          <span className="text-[12px] sm:text-[20px] font-semibold text-center">
            We create simple, clean and impressive designs <br />
            to promote your brand and push you to greater height.
          </span>
        </div>
      </article>
      <Offer />
      <div className="flex flex-col items-center my-4">
        <h3 className="text-[#002db3] pb-4">Want to see our works?</h3>
        <button className="bg-[#002db3] text-white">
          GRAPHICS DESIGN PORTFOLIO
        </button>
      </div>
      <div>
        <div className="grid grid-cols sm:grid-cols-3 gap-12 m-6  text-justify">
          <div className="flex flex-col shadow-md  p-4 items-center">
            <h2 className="pb-4 font-bold text-[20px] text-[#1d4ed8]">
              Our Team
            </h2>
            <h2>
              We recognize that our team is the heartbeat of our brand, and we
              value every member's unique contribution. With a relentless
              pursuit of excellence, we aim to leave an indelible mark on the
              design landscape, one masterpiece at a time. Together, we strive
              to build a creative legacy that showcases the power of teamwork
              and the transformative impact of outstanding design.
            </h2>
          </div>
          <div className="flex flex-col shadow-md  p-4 items-center">
            <h2 className="pb-4 font-bold text-[20px] text-[#1d4ed8]">
              Our Vision
            </h2>
            <h2>
              To be the leading force in the world of graphics design, inspiring
              creativity and setting the standard for innovative visual
              solutions. We envision a future where our designs not only
              captivate but also drive positive change, leaving a lasting
              imprint on brands and individuals alike.
            </h2>
          </div>
          <div className="flex flex-col shadow-md  p-4 items-center">
            <h2 className="pb-4 font-bold text-[20px] text-[#1d4ed8]">
              Our Mission
            </h2>
            <h2>
              At Youngrilex Artwork, our mission is to elevate every visual
              experience through unparalleled creativity and design expertise.
              We are committed to delivering exceptional graphic solutions that
              not only meet but exceed the expectations of our clients. We
              strive to foster a collaborative environment, empowering our team
              to push the boundaries of design innovation. With a relentless
              pursuit of excellence, we aim to leave an indelible mark on the
              design landscape, one masterpiece at a time.
            </h2>
          </div>
        </div>
      </div>
      <Contact/>
     
    </div>
  );
}
