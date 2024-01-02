import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary } from '@mui/joy'
import { ImageListItem, ImageListItemBar } from '@mui/material'

const itemData = [
    {
      img: "../assets/Gold.jpg",
      title: "LOGO DESIGN",
      author:
        "First impressions are crucial.Your logo appears on every page of your website and it is the focal point of your branding. It symbolisms all you stand for and captures your basic philosophy. It needs to be unique.",
    },
    {
      img: "../assets/adenuga.jpg",
      title: "ADVERTISEMENT FLYER",
      author:
        "Thousands of businesses have benefited from my logo and branding work in terms of increasing their client base and solidifying their reputation. I am excited to apply my passion in your project because it is my passion!",
    },
    {
      img: "../assets/fad.jpg",
      title: "3D MOCK-UP DESIGN",
      author:
        "We do 3d product modeling and product rendering for your online stores",
    },
    {
      img: "../assets/large.jpg",
      title: "LARGE FORMAT PRINTING",
      author:
        "We design print ready large format and also do large format printing which can be delivered nationwide",
    },
    {
      img: "../assets/bc.jpg",
      title: "BUSINESS CARD",
      author:
        "Are you here in search of a business card and logo designer for your business? Then you are in right place. We create professional modern, minimalist, luxury business cards.",
    },
    {
      img: "../assets/pp.jpg",
      title: "PICTURE FRAME",
      author: "Every frame and every scene has to have an intention.",
    },
    {
      img: "../assets/JOTTER.jpg",
      title: "JOTTER DESIGN & PRINTING",
      author: "Hard cover jotters are the holy grail of party souvenirs.",
    },
    {
      img: "../assets/mug.png",
      title: "Customized Printing on Mugs, T-shirts & Caps",
      author: "Create custom magic mugs with your photos and messages. Surprise everyone as your mug displays its prints every time you pour hot liquid into it.",
    },
  ];

const Offer = () => {
  return (
    <div> <h3 className="text-[#1d4ed8] font-semibold text-[14px] p-4 sm:text-[25px] text-center" >WHAT WE OFFER?</h3>
    <div className='grid mx-6 sm:mx-12 grid-cols sm:grid-cols-4 gap-4'>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            actionIcon={
              <AccordionGroup sx={{ maxWidth: "100%" }}>
                <Accordion>
                  <AccordionSummary>
                    <h5 style={{ color: "#FFD700" }}>{item.title}</h5>
                  </AccordionSummary>
                  <AccordionDetails style={{ color: "white" }}>
                    <h6>{item.author}</h6>
                  </AccordionDetails>
                </Accordion>
              </AccordionGroup>
            }
          />
        </ImageListItem>
      ))}
    </div></div>
  )
}

export default Offer