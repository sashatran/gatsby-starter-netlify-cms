---
templateKey: blog-post
title: Flexbox SCSS Mixin
date: 2018-10-18T03:13:44.591Z
description: FlexBox Mixin
tags:
  - scss
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia, urna eu cursus laoreet, nunc dolor sodales est, eu feugiat sapien ex a purus.

```
@mixin flex-it() {  
  display: flex;
  justify-content: center;
  align-items: center;
}
    
.centered-element  {
  @include flex-it();
}
```
