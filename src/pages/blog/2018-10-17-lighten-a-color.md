---
templateKey: blog-post
title: Lighten A Color
date: 2018-10-18T04:27:06.895Z
description: Lighten A Color
tags:
  - scss
---
HTML
```
<div class="box" data-style="1">10%</div>
<div class="box" data-style="2">20%</div>
<div class="box" data-style="3">30%</div>
<div class="box" data-style="4">40%</div>
<div class="box" data-style="5">50%</div>
```
CSS
```
$background: #47BFC1;

.box {
 margin: 5px;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 70px;
 height: 70px;
 background-color: $background;
}

@for $i from 1 through 5 {
 [data-style="#{$i}"] {
 color: lighten($background, $i * 10%);
 }
}
```

<a class="ig-link" target="_blank" href="https://www.instagram.com/p/BkTrw14BY96/"> Instagram Post </a>
