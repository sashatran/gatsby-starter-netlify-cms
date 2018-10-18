---
templateKey: blog-post
title: Grid Mixin in SCSS
date: 2018-10-18T04:30:22.760Z
description: 'CSS Grid '
tags:
  - scss
---
```
@mixin grid-layout($w, $h, $template, $gap) {
 width: $w;
 height: $h;
 display: grid;
 grid-template: $template;
 grid-gap: $gap;
}
    
.grid-container {
 @include grid-layout(100px, 100px, "1fr 1fr", 5px);
}

.grid-element  {
 border: 1px solid #666666;
}
```

<a class="ig-link" href="https://www.instagram.com/p/Bicof3LBBFB/"> Instagram Post </a>
