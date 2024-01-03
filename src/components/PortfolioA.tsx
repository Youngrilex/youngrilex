import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Portfolio() {
  return (
    <div className="">
      <div className="flex flex-col p-4 items-center font-bold font-serif text-white bg-gradient-to-r from-cyan-500 to-blue-500 mb-4 sm:mb-8">
        <span className="text-[20px]">
          Recent Projects & Work
        </span>
        <span className="text-[14px] font-semibold">
          Here are a few past design projects I've worked on.
        </span>
      </div>
      <ImageList variant="masonry"  cols={2} gap={20} className="mx-6 ">
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              className="shadow-2xl hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "../assets/kabeerah business  1.jpg",
    title: "Bed",
  },
  {
    img: "../assets/Gold.jpg",
    title: "Books",
  },
  {
    img: "../assets/bc.jpg",
    title: "Blinds",
  },
  {
    img: "../assets/limab flier.jpg",
    title: "Kitchen",
  },
  {
    img: "../assets/Free Square Flyer Mockup.jpg",
    title: "Coffee table",
  },
  {
    img: "../assets/KIKS Book cover.jpg",
    title: "Coffee",
  },
  {
    img: "../assets/youngrilex l.jpg",
    title: "Sink",
  },
  {
    img: "../assets/al-haqq.jpg",
    title: "Storage",
  },
  {
    img: "../assets/adenuga l1.jpg",
    title: "Candle",
  },
  {
    img: "../assets/pp.jpg",
    title: "Laptop",
  },
  {
    img: "../assets/JOTTER.jpg",
    title: "Chairs",
  },
  {
    img: "../assets/NEYMAR.jpg",
    title: "Doors",
  },
];
