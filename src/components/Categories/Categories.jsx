import { useEffect, useState } from "react";
import CategoriesText from "./CategoriesText";
import Category from "../Category/Category";

const Categories = ({ setIsCategories }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <div className="">
      <CategoriesText></CategoriesText>
      <div className="flex flex-wrap  lg:justify-between justify-center md:gap-7 ">
        {categories.map((category) => (
          <Category
            setIsCategories={setIsCategories}
            props={category}
            key={category.id}
          ></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
