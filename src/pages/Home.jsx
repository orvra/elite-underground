import ItemCard from "../components/ItemCard";
import MainButton from "../components/MainButton";
import Footer from "../components/Footer";
import products from "../data/products";
import { Link } from "react-router-dom";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

function Home() {
  return (
    <div className="mb-8 min-[1000px]:mb-12">
      {/*HERO TEXT SECTION 1 A*/}
      <div className="flex flex-col px-10 items-center text-center max-w-5xl mx-auto pb-8 pt-14 lg:py-8 lg:pb-12">
        <h1 className="lg:text-[85px] md:text-5xl text-4xl font-bold tracking-tighter">
          ELITE UNDERGROUND
        </h1>
        <p className="text-sm sm:text-2xl pt-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-black">
          Unleash the champion within, no matter where you begin. Embrace a
          future where greatness knows no limits.
        </p>
      </div>

      {/* HERO PICTURE SECTION 1 */}
      <div className="grid  bg-sky-100  grid-cols-1 gap-0 lg:grid-cols-2">
        <div className="h-[700px] relative">
          <img
            className="h-full object-cover"
            src="./src/images/athletes/women_staring2.jpg"
          />{" "}
          <Link to="/women">
            <MainButton
              position="absolute left-4 bottom-20"
              text="Shop Womens"
            />
          </Link>
        </div>
        <div className="h-[700px] relative">
          <img
            className="h-full object-cover"
            src="./src/images/athletes/guy_sitting.jpg"
          />{" "}
          <Link to="/men">
            <MainButton position="absolute left-4 bottom-20" text="Shop Mens" />
          </Link>
        </div>
        {/*<div className='h-[700px] relative'><img className='h-full object-cover' src='./src/images/athletes/kids_fight.jpg'/> <MainButton position='absolute left-0 bottom-0 m-4' text='Shop Kids' /></div>*/}
      </div>

      {/*WOMENS COLLECTION */}

      <div className="max-w-[1450px] mx-auto px-4 pt-10 pb-4 lg:pt-16  ">
        <h2 className="font-medium text-gray-700">WOMENS</h2>
        <div className="pb-4 justify-between lg:flex">
          <h1 className="font-bold text-3xl">NEW RELEASES</h1>
          <Link to="/women">
            <a className="block py-2 tracking-tighter underline cursor-pointer">
              View All
            </a>
          </Link>
        </div>
        <div className="grid grid-flow-col h-[600px] gap-x-1.5 overflow-x-auto overflow-y-hidden">
          <ItemCard
            id={products[0].id}
            src={products[0].src}
            itemName={products[0].name}
            color={products[0].color}
            cost={products[0].price}
            height="600"
          />

          <ItemCard
            id={products[18].id}
            src={products[18].src}
            itemName={products[18].name}
            color={products[18].color}
            cost={products[18].price}
            height="600"
          />

          <ItemCard
            id={products[6].id}
            src={products[6].src}
            itemName={products[6].name}
            color={products[6].color}
            cost={products[6].price}
            height="600"
          />

          <ItemCard
            id={products[17].id}
            src={products[17].src}
            itemName={products[17].name}
            color={products[17].color}
            cost={products[17].price}
            height="600"
          />
        </div>
      </div>

      {/*SHOP KIDS HERO SECTION*/}
      <div className="relative w-full h-[700px] lg:mt-6">
        <img
          className="w-full h-full object-cover"
          src="./src/images/athletes/kids_fight3.jpg"
        ></img>
        <Link to="/kids">
          <MainButton
            position="absolute left-1/2 top-1/2 -translate-x-20"
            text="Shop Kids"
          />
        </Link>
      </div>

      {/*MENS COLLECTION */}

      <div className="max-w-[1450px] mx-auto px-4 pt-10 lg:pt-16 ">
        <h2 className="font-medium text-gray-700">MENS</h2>
        <div className="pb-4 justify-between lg:flex">
          <h1 className="font-bold text-3xl">ELITE FITNESS</h1>
          <Link to="/men">
            <a className="block py-2 tracking-tighter underline cursor-pointer">
              View All
            </a>
          </Link>
        </div>
        <div className="grid grid-flow-col h-[600px] gap-x-1.5 overflow-x-auto overflow-y-hidden">
          <ItemCard
            id={products[23].id}
            src={products[23].src}
            itemName={products[23].name}
            color={products[23].color}
            cost={products[23].price}
            height="600"
          />

          <ItemCard
            id={products[19].id}
            src={products[19].src}
            itemName={products[19].name}
            color={products[19].color}
            cost={products[19].price}
            height="600"
          />

          <ItemCard
            id={products[24].id}
            src={products[24].src}
            itemName={products[24].name}
            color={products[24].color}
            cost={products[24].price}
            height="600"
          />

          <ItemCard
            id={products[21].id}
            src={products[21].src}
            itemName={products[21].name}
            color={products[21].color}
            cost={products[21].price}
            height="600"
          />
        </div>
      </div>

      {/* TRI-ATHLETE SECTION */}
      <div className="max-w-[1450px] mx-auto px-4 pt-4 lg:pt-4">
        <h1 className="font-bold text-3xl pb-4">OUR ATHLETES</h1>
        <div className="flex flex-col space-y-4 lg:h-[620px] lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-2 lg:grid-rows-1">
          <div className="relative group max-w-[500px] h-full overflow-hidden lg:w-full">
            <img
              className="absolute z-[5] h-12 top-3 left-3 "
              src="/src/images/athletes/ca.svg"
            />
            <div className="absolute h-full w-full z-[4] ">
              <div className="w-full h-full bg-gradient-to-bl from-transparent from-50% to-black opacity-100 rounded-lg"></div>
              <p className="absolute bottom-5 left-3 text-white text-lg font-bold">
                JACK HARRISON <br />
                3x ULTRAMARATHON
                <br />
                WORLD CHAMPION <br />
                <p className="bg-gradient-to-r from-red-600 via-white to-red-600 text-transparent bg-clip-text text-xl">
                  @JHARRISON_RUNS
                </p>
              </p>
            </div>
            <img
              src="/src/images/clothing/man_running.jpg"
              className="w-full h-full z-[3] rounded-lg object-cover group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden max-w-[500px] h-full lg:w-full">
            <img
              className="absolute z-[5] h-12 top-3 left-3"
              src="/src/images/athletes/gb-sct.svg"
            />
            <div className="absolute h-full w-full z-[4]">
              <div className="w-full h-full bg-gradient-to-bl from-transparent from-50% to-black opacity-100 rounded-lg"></div>
              <p className="absolute bottom-5 left-3 text-white text-lg font-bold">
                MELISSA HAMILTON <br />
                WOMENS XG KICKBOXING <br />
                WORLD CHAMPION <br />
                <p className="bg-gradient-to-r from-blue-500 via-white to-blue-500 text-transparent bg-clip-text text-xl">
                  @MELISSASOULREAPER
                </p>
              </p>
            </div>

            <img
              src="/src/images/clothing/girl_boxing.jpg"
              className="w-full h-full z-[3] rounded-lg object-cover group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden max-w-[500px] h-full lg:w-full">
            <img
              className="absolute z-[5] h-12 top-3 left-3"
              src="/src/images/athletes/us.svg"
            />

            <div className="absolute h-full w-full z-[4]">
              <div className="w-full h-full bg-gradient-to-bl from-transparent from-50% to-black opacity-100 rounded-lg "></div>
              <p className="absolute bottom-5 left-3 text-white text-lg font-bold">
                KATY LEWIS <br />
                YOUNGEST WOMENS
                <br />
                FIBA ALL STAR <br />
                <p className="bg-gradient-to-r from-red-600 via-white to-blue-600 text-transparent bg-clip-text text-xl">
                  @KATYLEWISJUMPZ
                </p>
              </p>
            </div>
            <img
              src="/src/images/clothing/girl_bball.jpg"
              className="w-full h-full z-[3] rounded-lg object-cover group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
