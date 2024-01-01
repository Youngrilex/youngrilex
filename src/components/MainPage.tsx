import Footer from "./Footer";
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
        <div className="absolute flex flex-col justify-center items-center text-white w-[100%] top-0 bottom-0 left-0 right-0">
          <h2 className="text-[#FFD700] text-[20px] sm:text-[50px] font-bold">
            YOUNGRILEX ARTWORK
          </h2>
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
        <div className="grid grid-cols sm:grid-cols-3 gap-4 m-6 ">
          <div className="flex flex-col items-center">
            <h2>Our Team</h2>
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              officiis mollitia eveniet sapiente at odit omnis similique veniam?
              Perspiciatis aperiam delectus amet ipsa omnis aut, temporibus
              nemo! Ea, nulla sequi.
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <h2>Our Team</h2>
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              officiis mollitia eveniet sapiente at odit omnis similique veniam?
              Perspiciatis aperiam delectus amet ipsa omnis aut, temporibus
              nemo! Ea, nulla sequi.
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <h2>Our Team</h2>
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              officiis mollitia eveniet sapiente at odit omnis similique veniam?
              Perspiciatis aperiam delectus amet ipsa omnis aut, temporibus
              nemo! Ea, nulla sequi.
            </h2>
          </div>
        </div>
      </div>
      <article className="h-[100%] relative overflow-hidden">
        <img
          src="../assets/nn.jpg"
          alt=""
          className="w-[100%] h-[100%] relative"
        />
        <div className="absolute flex flex-col justify-center items-center text-white w-[100%] top-0 bottom-0 left-0 right-0">
          <h2 className="text-[#FFD700] text-[20px] sm:text-[50px] font-bold">
            YOUNGRILEX ARTWORK
          </h2>
          <span className="text-[12px] sm:text-[20px] font-semibold text-center">
            We create simple, clean and impressive designs <br />
            to promote your brand and push you to greater height.
          </span>
        </div>
      </article>
      <Footer />
    </div>
  );
}
