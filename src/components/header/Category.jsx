import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { usePost } from "../../context/PostsContext";
import "./style/catergory.css";

const Category = () => {
  const { categories, setCategories } = usePost();
  const [newCategories, setNewCategories] = useState([]);
  console.log(categories.name);

  useEffect(() => {
    const newCategories = [...categories];
    setNewCategories(newCategories);
  }, [categories]);

  const options = {
    responsiveClass: true,
    nav: true,
    autoplay: false,
    autoWidth: true,
    margin: 10,
    dots: false,
    navText: [
      `<i class="bi bi-chevron-left prev-btn" aria-hidden="true"></i>`,
      `<i class="bi bi-chevron-right next-btn" aria-hidden="true"></i>`,
    ],
    smartSpeed: 500,
  };

  return (
    <div className="bg-light">
      <OwlCarousel {...options} className="owl-container container">
        {newCategories.map((category) => (
          <span key={category.id} className="item text-secondary category">
            {category.name}
          </span>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Category;
