---
templateKey: blog-post
title: Rotate Mixin with SCSS
date: 2018-10-18T04:29:02.332Z
description: with Browser Prefix
tags:
  - scss
---
```
@mixin rotate($degree) {
 -webkit-transform: $degree;
 -ms-transform: $degree;
 -o-transform: $degree;
 transform: $degree;
}

.rotate-element  {
 @include rotate(25deg);
}
```

<a class="ig-link" href="https://www.instagram.com/p/BhcjSDAhyjz"> Instagram Post </a>
