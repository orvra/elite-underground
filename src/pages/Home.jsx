import ItemCard from "../components/ItemCard";
import MainButton from "../components/MainButton";
import products from "../data/products";
import { Link } from "react-router-dom";
import IconAnimation from "../components/IconAnimation";

function Home() {
  return (
    <div className="mb-8">
      {/*HERO TEXT SECTION 1 A*/}
      <div className="flex flex-col px-10 items-center text-center max-w-5xl mx-auto pt-14 pb-7 lg:pt-8 lg:pb-12">
        <div className="flex items-center space-x-3.5 md:space-x-4 lg:space-x-6">
          <h1 className="text-4xl font-bold tracking-tighter lg:text-[85px] md:text-5xl ">
            WE ARE
          </h1>{" "}
          <IconAnimation interval={250} />
        </div>
        <p className="text-md md:text-lg lg:text-2xl pt-4 -text-transparent -bg-clip-text -bg-gradient-to-r from-slate-500 to-black">
          Unleash the champion within, no matter where you begin. Embrace a
          future where greatness knows no limits.
        </p>
      </div>

      {/* HERO MENS SECTION */}
      <div className="relative h-[700px] w-full overflow-hidden">
        <div className="absolute z-[6] w-full h-full bg-gradient-to-b from-transparent from-40% to-black opacity-100 md:bg-gradient-to-br xl:bg-gradient-to-r"></div>
        <img
          className="absolute z-[5] h-full w-full object-cover xl:h-[110%] 2xl:h-[135%] min-[2000px]:h-[165%]"
          src="../images/athletes/guy_sitting.jpg"
        />{" "}
        <div className="absolute z-[7] bottom-4 w-full px-5 md:px-0 md:w-1/2 md:bottom-[40%] md:left-[60%] lg:left-[65%] xl:left-[63%] xl:bottom-[35%]">
          <div className="pb-4">
            <h1 className="text-white font-bold tracking-tighter text-2xl md:text-3xl xl:text-4xl">
              ELITE UNDERGROUND
            </h1>
            <h1 className="text-white font-bold tracking-tighter pb-2 md:text-5xl xl:text-7xl">
              GYM APPAREL
            </h1>
            <p className="text-white text-md md:text-sm xl:text-lg">
              Every rep matters, so let's move in style.
            </p>
          </div>
          <Link to="/men">
            <MainButton position="w-full md:w-52" text="Shop Mens" />
          </Link>
        </div>
      </div>

      {/*MENS COLLECTION */}

      <div className="max-w-[1450px] mx-auto px-4 pt-10 pb-4 lg:pt-16 ">
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

      {/* WOMENS HERO SECTION*/}
      <div className="relative h-[700px] w-full overflow-hidden lg:mt-6">
        <img
          className="absolute z-[5] h-full w-full object-cover xl:h-[110%]"
          src="./src/images/athletes/womens_hero.jpg"
        />{" "}
        <div className="absolute z-[7] bottom-4 w-full px-5 md:px-0 md:w-1/2 md:bottom-[40%] md:left-[4%] lg:left-[6%] xl:left-[10%] xl:bottom-[35%]">
          <div className="pb-4">
            <h1 className="text-white font-bold tracking-tighter text-xl md:text-3xl xl:text-4xl">
              WHERE COMFORT MEETS
            </h1>
            <h1 className="text-white font-bold tracking-tighter pb-2 text-4xl md:text-5xl xl:text-7xl">
              PERFORMANCE
            </h1>
            <p className="text-white text-md md:text-sm xl:text-lg">
              Grab your fit and shine bright.
            </p>
          </div>
          <Link to="/women">
            <MainButton position="w-full md:w-52" text="Shop Womens" />
          </Link>
        </div>
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
        <div className="absolute z-[6] w-full h-full bg-gradient-to-b from-transparent from-60% to-black opacity-100 lg:from-40%"></div>
        <img
          className="w-full h-full object-cover"
          src="./src/images/athletes/kids_fight3.jpg"
        ></img>
        <div className="absolute z-[7] flex flex-col justify-center bottom-4 w-full px-4 md:bottom-[30%]">
          <div className="text-center pb-4">
            <h1 className="text-white font-bold tracking-tighter text-xl md:text-3xl xl:text-4xl">
              EVERY CHAMPION BEGINS
            </h1>
            <h1 className="text-white font-bold tracking-tighter text-4xl pb-2 md:text-5xl xl:text-7xl">
              IN THE UNDERGROUND
            </h1>
            <p className="text-white text-md md:text-sm xl:text-lg">
              Choose your gear and go.
            </p>
          </div>
          <div className="w-full text-center">
            <Link to="/kids">
              <MainButton position="w-full md:w-48 " text="Shop Kids" />
            </Link>
          </div>
        </div>
      </div>

      {/* TRI-ATHLETE SECTION */}
      <div className="max-w-[1450px] mx-auto px-4 pt-12 lg:pt-20">
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
