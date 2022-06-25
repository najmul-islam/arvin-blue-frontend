import React, { useRef } from "react";
import TinySlider from "tiny-slider-react";
import { useCategory } from "../../context/CategoryContext.js";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  Container,
  SlideContainer,
  Tag,
  BtnContainer,
  SlideBtn,
  Separator,
  TagLink,
} from "./style/Categories.style";

const Categories = () => {
  const { categories, handleCategory } = useCategory();
  const ts = useRef(null);

  const onGoTo = (dir) => {
    ts.current.slider.goTo(dir);
  };

  const settings = {
    nav: false,
    mouseDrag: true,
    controls: false,
    autoWidth: true,
    loop: false,
    speed: 100,
    gutter: 20,
  };

  const renderTags = (tag) => {
    let name = tag;
    name = name.toLowerCase().replace(/\s/g, "-");
    const url = `/category/${name}`;
    return url;
  };

  return (
    <Container className="container-md">
      {/* slider */}
      <SlideContainer className="slide-container">
        <TinySlider ref={ts} settings={settings}>
          {categories.map((category) => (
            <TagLink key={category.id} to={renderTags(category.name)}>
              <Tag className="tag" onClick={() => handleCategory(category)}>
                {category.name}
              </Tag>
            </TagLink>
          ))}
        </TinySlider>
      </SlideContainer>
      {/* slider btn */}
      <BtnContainer className="d-none d-md-block btn-container">
        <SlideBtn
          className="slide-btn"
          type="button"
          onClick={() => onGoTo("prev")}
        >
          <BsChevronLeft />
        </SlideBtn>
        <Separator className="saparator"></Separator>
        <SlideBtn
          className="slide-btn"
          type="button"
          onClick={() => onGoTo("next")}
        >
          <BsChevronRight />
        </SlideBtn>
      </BtnContainer>
    </Container>
  );
};

export default Categories;
