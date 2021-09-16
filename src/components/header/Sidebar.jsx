import React from "react";
import { Link } from "react-router-dom";
import { usePost } from "../../context/PostsContext";

const Sidebar = () => {
  const { categories, setCategories } = usePost();

  return (
    <div>
      <Link>
        {categories.map((category) => (
          <span>{category.name}</span>
        ))}
      </Link>
    </div>
  );
};

export default Sidebar;
