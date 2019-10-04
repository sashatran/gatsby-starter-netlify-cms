---
templateKey: blog-post
title: SCSS Multidimensional List
date: 2018-10-20T21:16:05.447Z
description: SCSS Multidimensional List
tags:
  - scss
---
Find the Instagram Post [here](https://www.instagram.com/p/BpKt4afh35k/)

Link to Codepen [here](https://codepen.io/sashatran/pen/JmZvxa)

#

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

<iframe height='300' scrolling='no' title='SCSS Multidimensional List' src='//codepen.io/sashatran/embed/JmZvxa/?height=300&theme-id=28022&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/sashatran/pen/JmZvxa/'>SCSS Multidimensional List</a> by Sasha  (<a href='https://codepen.io/sashatran'>@sashatran</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
