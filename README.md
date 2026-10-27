## LAVIRS — Fashion & Lifestyle

## LAVIRS is a modern fashion and lifestyle e-commerce website built with React and Tailwind CSS.

## Current Components

   Product Card

A reusable product card component designed for the LAVIRS e-commerce interface.

## It includes:

Product image

Discount badge

Wishlist button

Express delivery badge

Product name

Product description

Rating and reviews

Current price

Original price

Discount percentage

Add to Cart button

Buy Now button


## 2 .Product Component & Dummy API

## Reusable Product Card

Created a reusable ProductCard component to display product information dynamically using props.

The component receives product data from ProductGrid and displays:

Product image

Product name

Description

Delivery type

Rating and reviews

Current price

Original price

Discount

Add to Cart button

Buy Now button

Wishlist icon

## Product Grid

Created a ProductGrid component to fetch product data from JSON Server and render multiple reusable ProductCard components.

{products.map((item) => (
  <ProductCard key={item.id} {...item} />
))}

This allows the same ProductCard component to be reused for every product without manually passing each product's details.

## JSON Server

Added JSON Server as a dummy backend for product data.

The product data is stored in:

products.json



Product data is fetched using fetch() inside ProductGrid.

## Dummy Product Data

Added 25 product records to the JSON database with different product details such as:

Product name

Category

Price

Original price

Product image

Rating

Reviews

Description

Delivery type

Discount

Product badge

The product data is designed to simulate a real e-commerce product listing.

## Reusability

The main purpose of this implementation is to make the product card reusable.

Instead of creating separate cards for every product, a single ProductCard component is used and different product data is supplied from the JSON Server API.