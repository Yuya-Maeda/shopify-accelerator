# Requirement
https://shopify.dev/themes/store/requirements

## 1 Theme Store Exclusivity

## 2 Uniqueness from free Shopify themes

## 3 Features

- Sections Everywhere
- Discounts 0display discount amounts 
- Dynamic checkout buttons
- Faceted search filtering
- Gift cards
- Images for social sharing
- Country selection
- Language selection 
- Multi-level menus
- Newsletter forms
- Pickup availability
- Product recommendations
- Product rating
- Rich product media 
- Search box or a link to search
- Selling plans 
    - Cart page
    - Customer page
- Shop Pay Installments
- Unit pricing 

## 4 Templates, sections and blocks

- theme.liquid
- 404.json
- article.json
- blog.json
- cart.json
- collection.json
- index.json
- list-collections.json
- page.json
- page.contact.json
- password.json
- product.json
- search.json
- gift_card.liquid
- settings_schema.json

### Section support requirements

- All templates must support sections (json templates)
- Theme includes Custom Liquid section

### Block and app block support

- Themes must support blocks for all
- Themes must support app blocks
- Custom Liquid

## 5 Lighthouse accessibility

- minimum average 60 performance score 
- themes must have a minimum accessibility score 90

## 6 Pages

### Layout page 

- payment method
- html element specify a lang attribute
- routes object dynamic url

### Product page requirement

- product page must contains
    - product.title
    - variant.price
    - variant.unit_price
    - variant's compare-at price
    - product.description

- product image
- variant image
- cart.texes_include
- buying function 
    - variant separate option
    - ability to select a quantity
    - add to cart button
    - callback function to update the price --
    - the first available variant loads on a page
- product page features
    - product recommendations 
    - Rich product media
    - Dynamic checkout
    - Pickup availability
    - Shop Pay installments

### Collection page requirements

- Collection objects
    - collection title
    - collection description
    - collection.image
- Products must be listed in a grid or list
    - product.title
    - product.price
    - product.images
    - variant.unit_price
    - at least one piece of media for a product
- product grid must not because of products
- Sale badge or product.compare_at_price_max 
- Must provide the ability to sort the product inside collections
- Must display a message if a collection has no product
- product.price_varies 


