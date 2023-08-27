import PosterText from "../components/PosterText";
import MainButton from "../components/MainButton";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";
import { Link } from "react-scroll";
import products from "../data/products";

function Women() {
  const womensProducts = products.filter(
    (product) => product.gender == "Women"
  );
  return (
    <div className="max-w-[1450px] mx-auto min-[1450px]:px-4">
      {/*Hero Section */}
      <div className="relative h-[800px]">
        <img
          src="./src/images/athletes/woman_jumping5.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/4 left-8 xl:left-32 w-1/2 pt-12">
          <PosterText
            text="Jump into your next workout and never look back."
            color="#E0B0FF"
          />
          <Link
            to="womens-collection" // Replace 'section2' with the ID of the section you want to scroll to
            smooth={true}
            duration={500} // Adjust the scroll duration as needed
            offset={-80}
          >
            <MainButton position="mt-8" text="Shop Collection" />
          </Link>
        </div>
      </div>
      {/*Clothing Section */}
      <div className="pt-8 px-4 lg:pt-14 min-[1450px]:px-0">
        <div className="text-start" id="womens-collection">
          <Header text="The Womens Collection" />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {womensProducts.map((i) => (
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

export default Women;
