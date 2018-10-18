---
templateKey: blog-post
title: Nesting Pseudo Selectors
date: 2018-10-18T04:15:59.118Z
description: Nesting Pseudo Selectors
tags:
  - scss
---
```
<button class="btn">Submit</button>
```

```
$green: #26A98D;
.btn {
  width: 100px;
  height: 30px;
  font-size: 12px;
  border: none;
  background: $green;
  color: lighten($green, 60%);
  cursor: pointer;
  &:hover {
   opacity: 0.6;
   transition: 0.2s all ease;
  }
}
```
<a class="ig-link" href="https://www.instagram.com/p/Bixgn-FBM9K/"> Instagram Post </a>
