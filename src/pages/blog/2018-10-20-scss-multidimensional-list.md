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

<p data-height="300" data-theme-id="28022" data-slug-hash="JmZvxa" data-default-tab="css,result" data-user="sashatran" data-pen-title="SCSS Multidimensional List" class="codepen">See the Pen <a href="https://codepen.io/sashatran/pen/JmZvxa/">SCSS Multidimensional List</a> by Sasha  (<a href="https://codepen.io/sashatran">@sashatran</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
