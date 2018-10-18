---
templateKey: blog-post
title: For Loop in SCSS
date: 2018-10-18T04:22:56.891Z
description: For Loop in SCSS
tags:
  - scss
---
```
<div class="flex-container">
 <div class="flex-child" data-style="1"></div> 
 <div class="flex-child" data-style="2"></div>
 <div class="flex-child" data-style="3"></div>
</div>
```

```
.flex-container {
 display: flex;
 width: 258px;
 height: 258px;
}
    
.flex-child {
 width: 80px;
 height: 80px;
 margin: 3px;
}

$colors: #47BFC1, #C86FF6, #5957CA;
@for $i from 1 through 3 {
 [data-style="#{$i}"] {
   background-color: nth($colors, $i);
 }
}

```
