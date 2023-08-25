import PosterText from "../components/PosterText";
import MainButton from "../components/MainButton";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";
import products from "../data/products";
import { Link } from "react-scroll";

function Kids() {
  const kidsProducts = products.filter((product) => product.gender == "Kids");
  return (
    <div className="max-w-[1450px] mx-auto">
      {/*Hero Section */}
      <div className="relative h-[800px]">
        <img
          src="./src/images/athletes/kids_soccer2.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-32 w-1/2 left-8 sm:top-48 xl:left-32 ">
          <PosterText text="It all starts with a kick." color="white" />
          <Link
            to="kids-collection" // Replace 'section2' with the ID of the section you want to scroll to
            smooth={true}
            duration={500} // Adjust the scroll duration as needed
            offset={-20}
          >
            <MainButton position="mt-8" text="Shop Collection" />
          </Link>
        </div>
      </div>

      {/*Clothing Section */}
      <div className="px-4 pt-8 lg:pt-14 xl:px-0" id="kids-collection">
        <Header text="The Kids Collection" />
        <div className="flex flex-wrap gap-2 xl:gap-1.5">
          {kidsProducts.map((i) => (
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

export default Kids;
