import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Button from "@mui/joy/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Footer from "./Footer";
import Navbar from "./Navbar";

const itemData = [
  {
    img: "../assets/Gold.jpg",
    title: "LOGO DESIGN",
    author:
      "First impressions are crucial.Your logo appears on every page of your website and it is the focal point of your branding. It symbolises all you stand for and captures your basic philosophy. It needs to be unique.",
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
    author: "@arwinneil",
  },
  {
    img: "../assets/JOTTER.jpg",
    title: "JOTTER DESIGN & PRINTING",
    author: "@tjdragotta",
  },
  {
    img: "../assets/mug.png",
    title: "Customized Printing on Mugs, T-shirts & Caps",
    author: "@katie_wasserman",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));



const defaultTheme = createTheme();

export default function WholeApp() {
  return (
    <div>
      <Navbar />
      <article
        style={{
          height: "100%",
          position: "relative",
          overflow: "hidden",
          marginTop: 10,
        }}
      >
        <img
          src="../assets/nn.jpg"
          alt=""
          style={{ width: "100%", height: "100%", position: "relative" }}
        />
        <div
          style={{
            color: "white",
            //  width: "100%",
            height: "fit-content",
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <h2 style={{ color: "#FFD700" }}>YOUNGRILEX ARTWORK</h2>
          <h5>
            We create simple, <br />
            clean and impressive designs <br />
            to promote your brand <br />
            and push you to greater height.
          </h5>
        </div>
      </article>
      <h3 style={{ color: "#002db3", textAlign: "center" }}>WHAT WE OFFER?</h3>
      <ImageList cols={4}>
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
      </ImageList>
      <div>
        <h3 style={{ color: "#002db3", textAlign: "center" }}>
          Want to see our works?
        </h3>
        <Button endDecorator={<KeyboardArrowRight />} variant="solid">
          GRAPHICS DESIGN PORTFOLIO
        </Button>
      </div>
      <div>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Item>
            <h2>Our Team</h2>
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              officiis mollitia eveniet sapiente at odit omnis similique veniam?
              Perspiciatis aperiam delectus amet ipsa omnis aut, temporibus
              nemo! Ea, nulla sequi.
            </h2>
          </Item>
          <Item>
            <h2>Our Team</h2>
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              officiis mollitia eveniet sapiente at odit omnis similique veniam?
              Perspiciatis aperiam delectus amet ipsa omnis aut, temporibus
              nemo! Ea, nulla sequi.
            </h2>
          </Item>
          <Item>
            <h2>Our Team</h2>
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              officiis mollitia eveniet sapiente at odit omnis similique veniam?
              Perspiciatis aperiam delectus amet ipsa omnis aut, temporibus
              nemo! Ea, nulla sequi.
            </h2>
          </Item>
        </Stack>
      </div>
      <article
        style={{
          height: "100%",
          position: "relative",
          overflow: "hidden",
          marginTop: 10,
        }}
      >
        <img
          src="../assets/nn.jpg"
          alt=""
          style={{ width: "100%", height: "100%", position: "relative" }}
        />
        <div
          style={{
            color: "white",
            //  width: "100%",
            height: "fit-content",
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <h2 style={{ color: "#FFD700" }}>CONTACT US</h2>
          <h5>
            We create simple, <br />
            clean and impressive designs <br />
            to promote your brand <br />
            and push you to greater height.
          </h5>
        </div>
      </article>
      <ThemeProvider theme={defaultTheme}>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Footer />
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
}
