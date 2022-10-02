# shopify-accelerator

## Theme name : Nadeshiko

Nadeshiko is a flower name. But the word is often used to describe beautiful lady in Japanese

## Concept

It’s good for Japanese language and Japanese Mincho typeface. (Mincho typeface is sort of serif typeface in English)

- using traditional Japanese pattern
- using “Hishigata” shape motif (diamond shape) Hishigata shape is sometimes used for Japanese traditional pattern
- No padding (margin) and big images

## Memo

### Main Section

- Header
  I tried to optimize accessibility that header can open with only keyboard on desktop view.
  I'm still learning accessibility but what I can improve?

  =Issue=: Cannot move focus ring automatically when open submenu. **I don't know how to implement** it seems .focus() doesn't work. Maybe .focus() only work for input tag?
  = need to add = :needs to add Shopify Utility LInks

- Product Page
  Showing big image
  Variation switch button
  =Issue=: It doesn't move to cart page when add cart clicked.
  =Issue-2=: I added variation switch buttons which leads to its variation. But when page reload, the position go back to top. I don't like this behavior. Is that possible to change variation without page reload?  What I can do? Also the Javascript for that is not beautiful...

  = need to add=: Variation pictures and its switch function like variation button.

### Presets Section

- Color Palette
  Color Utility tool to find good color variation and combination for accessibility.

- Staff Introduction
  making it easy to introduce store staffs.

- Carousel
  Big story telling carousel to show big image.

- Product carousel
  A carousel showing products.

## Progress

===== Finished =============
Not Yet 🥲
===== On Progress 80% ======

- Preset Section
  Introduction of Staff
  Color Palette

- header

===== On Progress 60% ======

- theme.liquid
- Layout
- footer
- Product page
- Collection page
- Page
- Cart
- Blog page
- Article Page
- Preset Sections
- carousel
- product-slider
- Components
  btn

===== Not Even Started Yet🥲 =======

- Customer
- Password page
- Register Page
- Rest Password page
- Login
- Order
- activate account page
- Page--Contact page
- Search page
- list-collections
- Sections
  contact-form
- featured-blog

==== Things to do ====

- Refactoring CSS Javascript
- Locales
- Relocate Translation
