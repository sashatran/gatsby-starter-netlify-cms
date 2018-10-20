---
templateKey: blog-post
title: SCSS Multidimensional List
date: 2018-10-20T21:16:05.447Z
description: SCSS Multidimensional List
tags:
  - scss
---
```
<div class="wrapper">
  <div class="box active">Active</div>
  <div class="box visited">Visited</div>
  <div class="box disabled">Disabled</div>
</div>
```

```
$list: (
  active #C86FF6, 
  disabled #BBB, 
  visited #47BFC1
);

@each $state, $background in $list {
  .#{$state} {
    background-color: $background;
    
    @if $state == active {
      color: white;
    }
  }
}
```

[Instagram Post](https://www.instagram.com/p/BpKt4afh35k/)

[Codepen](https://codepen.io/sashatran/pen/JmZvxa)
