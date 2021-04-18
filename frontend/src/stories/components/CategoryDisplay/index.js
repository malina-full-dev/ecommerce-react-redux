import React from 'react';
import {
  CategoryImage,
  CategoryImageLink,
  CategoryItems,
  CategoryTitle,
  Wrapper,
} from './CategoryDisplay.style';
import { FaChevronRight } from 'react-icons/fa';

import Product from '../CategoryProduct/';
export default function CategoryDisplay({
  image,
  titleFeature,
  title,
  categoryName,
  background,
  product,
}) {
  return (
    <Wrapper>
      <CategoryImage background={background}>
        <CategoryTitle>
          <h3>{titleFeature}</h3>
          <a href={`/category/${categoryName}`}>
            Shop for {title} <FaChevronRight size={15} />
          </a>
        </CategoryTitle>
        <CategoryImageLink href={`/category/${categoryName}`}>
          <img src={image} alt="" />
        </CategoryImageLink>
      </CategoryImage>
      <CategoryItems>
        {!product.loading &&
          product.products
            .slice(0, 6)
            .map((item) => (
              <Product key={item._id} showButtons={false} {...item} />
            ))}
      </CategoryItems>
    </Wrapper>
  );
}
