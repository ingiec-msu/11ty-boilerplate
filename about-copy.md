---
layout: layout.liquid
title: Ingie's Items
---

# {{ shop.name | default: "Ingie's Items" }}

<div class="image-gallery">
  <a href="{{ 'item1' | link_to: 'Item 1' }}">
    <img src="https://via.placeholder.com/300x200" alt="Image 1">
  </a>
  <a href="{{ 'item2' | link_to: 'Item 2' }}">
    <img src="https://via.placeholder.com/300x200" alt="Image 2">
  </a>
  <a href="{{ 'item3' | link_to: 'Item 3' }}">
    <img src="https://via.placeholder.com/300x200" alt="Image 3">
  </a>
</div>

<footer>
  <p>Welcome to My Image Gallery</p>
</footer>
