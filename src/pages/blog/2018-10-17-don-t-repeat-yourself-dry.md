---
templateKey: blog-post
title: Don't Repeat Yourself(DRY)
date: 2018-10-18T04:18:31.759Z
description: Don't Repeat Yourself(DRY)
tags:
  - scss
---
```
%heading {
 font-family: 'Roboto', sans-serif;
 letter-spacing: 0.5px;
 text-transform: uppercase;
}

.main-title {
 @extend %heading;
 font-size: 1.4em;
 color: #F19FAF;
}

.sub-title {
 @extend %heading;
 font-size: 1em;
 color: #9960F0;
}
```
