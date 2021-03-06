import React from "react";
import ProductOne from "../../src/assets/products/product-00.jpeg";
import ProductTwo from "../../src/assets/products/product-04.jpeg";
import ProductThree from "../../src/assets/products/product-05.jpeg";
import ProductFour from "../../src/assets/products/product-06.jpeg";
import ProductFive from "../../src/assets/products/product-07.jpeg";
import ProductSix from "../../src/assets/products/product-08.jpeg";
import ProductSeven from "../../src/assets/products/product-09.jpeg";
import ProductEight from "../../src/assets/products/product-10.jpeg";
import ProductNine from "../../src/assets/products/product-11.jpeg";
import ProductTen from "../../src/assets/products/product-12.jpeg";
import ProductEleven from "../../src/assets/products/product-13.jpeg";
import ProductTwelve from "../../src/assets/products/product-14.jpeg";
import ProductThirteen from "../../src/assets/products/product-15.jpeg";
import ProductFourteen from "../../src/assets/products/product-16.jpeg";
import ProductFifteen from "../../src/assets/products/product-17.jpeg";
import ProductSixteen from "../../src/assets/products/product-18.jpeg";
import ProductSeventeen from "../../src/assets/products/product-19.jpeg";
import ProductEighteen from "../../src/assets/products/product-20.jpeg";
import ProductNineteen from "../../src/assets/products/product-21.jpeg";
import ProductTwenty from "../../src/assets/products/product-22.jpeg";
import ProductTwentyOne from "../../src/assets/products/product-23.jpeg";
import styled from "styled-components";

const ProductsSection = () => {
  return (
    <Section>
      <h2 className="section__title">All Products</h2>
      <div className="products__container container grid">
        <article className="product__card">
          <span className="product__tag">Sale</span>

          <img
            className="product__img"
            src={ProductOne}
            alt="The product image"
          />

          <div className="product__data">
            <h3 className="product__title">Closet</h3>
            <span className="product__price">$10.00</span>
          </div>

          <button className="button product__button">Contact Us</button>
        </article>

        <article className="product__card">
          <span className="product__tag">Sale</span>

          <img
            className="product__img"
            src={ProductTwo}
            alt="The product image"
          />

          <div className="product__data">
            <h3 className="product__title">Chair</h3>
            <span className="product__price">$15.00</span>
          </div>

          <button className="button product__button">Contact Us</button>
        </article>

        <article className="product__card">
          <span className="product__tag">Sale</span>

          <img
            className="product__img"
            src={ProductThree}
            alt="The product image"
          />

          <div className="product__data">
            <h3 className="product__title">Idk</h3>
            <span className="product__price">$15.00</span>
          </div>

          <button className="button product__button">Contact Us</button>
        </article>

        <article className="product__card">
          <span className="product__tag">Sale</span>

          <img
            className="product__img"
            src={ProductFour}
            alt="The product image"
          />

          <div className="product__data">
            <h3 className="product__title">Idk</h3>
            <span className="product__price">$15.00</span>
          </div>

          <button className="button product__button">Contact Us</button>
        </article>

        <article className="product__card">
          <span className="product__tag">Sale</span>

          <img
            className="product__img"
            src={ProductFive}
            alt="The product image"
          />

          <div className="product__data">
            <h3 className="product__title">Idk</h3>
            <span className="product__price">$15.00</span>
          </div>

          <button className="button product__button">Contact Us</button>
        </article>

        <article className="product__card">
          <span className="product__tag">Sale</span>

          <img
            className="product__img"
            src={ProductSix}
            alt="The product image"
          />

          <div className="product__data">
            <h3 className="product__title">Idk</h3>
            <span className="product__price">$15.00</span>
          </div>

          <button className="button product__button">Contact Us</button>
        </article>

        <article className="product__card">
          <span className="product__tag">Sale</span>

          <img
            className="product__img"
            src={ProductSeven}
            alt="The product image"
          />

          <div className="product__data">
            <h3 className="product__title">Idk</h3>
            <span className="product__price">$15.00</span>
          </div>

          <button className="button product__button">Contact Us</button>
        </article>

        <article className="product__card">
          <span className="product__tag">Sale</span>

          <img
            className="product__img"
            src={ProductEight}
            alt="The product image"
          />

          <div className="product__data">
            <h3 className="product__title">Idk</h3>
            <span className="product__price">$15.00</span>
          </div>

          <button className="button product__button">Contact Us</button>
        </article>

        <article className="product__card">
          <span className="product__tag">Sale</span>

          <img
            className="product__img"
            src={ProductNine}
            alt="The product image"
          />

          <div className="product__data">
            <h3 className="product__title">Idk</h3>
            <span className="product__price">$15.00</span>
          </div>

          <button className="button product__button">Contact Us</button>
        </article>

        <article className="product__card">
          <span className="product__tag">Sale</span>

          <img
            className="product__img"
            src={ProductTen}
            alt="The product image"
          />

          <div className="product__data">
            <h3 className="product__title">Idk</h3>
            <span className="product__price">$15.00</span>
          </div>

          <button className="button product__button">Contact Us</button>
        </article>
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem 0 1rem;
  .product__button {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    transform: translateY(0);
    opacity: 1;
  }

  .product__card:hover {
    box-shadow: 0 12px 32px hsla(0, 0%, 20%, 0.1);
    padding: 0;
  }

  .product__card:hover .product__button {
    transform: translateY(0);
    opacity: 1;
  }

  @media screen and (min-width: 568px) {
    .products__container {
      display: flex;
      grid-template-columns: repeat(2, 1fr);
      align-content: center;
      gap: 1.5rem;
    }
  }

  @media screen and (min-width: 767px) {
    .product__title,
    .product__price {
      font-size: var(--normal-font-size);
    }
  }

  @media screen and (min-width: 1024px) {
    .products__container {
      grid-template-columns: repeat(3, 312px);
    }
  }
`;

export default ProductsSection;
