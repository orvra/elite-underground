import PosterText from "../components/PosterText";
import MainButton from "../components/MainButton";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";
import products from "../data/products";
import { Link } from "react-scroll";
import Footer from "../components/Footer";

function Men() {
  const mensProducts = products.filter((product) => product.gender == "Mens");
  return (
    <div className="max-w-[1450px] mx-auto min-[1450px]:px-4">
      <div className="relative h-[800px]">
        {/*Hero Section */}
        <img
          src="./src/images/athletes/armyrunning2.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute z-20 left-1/3 min-[360px]:left-36 top-12 min-[420px]:left-1/2 md:top-1/3 md:pl-14">
          <PosterText
            text="Explore your next horizon without compromise."
            color="#71797E"
          />
          <Link
            to="mens-collection" // Replace 'section2' with the ID of the section you want to scroll to
            smooth={true}
            duration={500} // Adjust the scroll duration as needed
            offset={-20}
          >
            <MainButton
              position="mt-8 ml-10 sm:ml-0 md:mt-12"
              text="Shop Collection"
            />
          </Link>
        </div>
      </div>
      {/*Clothing Section */}
      <div
        className="pt-8 px-4 lg:pt-14 min-[1450px]:px-0"
        id="mens-collection"
      >
        <Header text="The Men's Collection" />
        <div className="flex flex-wrap gap-1.5">
          {mensProducts.map((i) => (
            <ItemCard
              key={i.id}
              src={i.src}
              itemName={i.name}
              color={i.color}
              cost={i.price}
              id={i.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Men;
