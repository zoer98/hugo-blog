---
slug: 8
title: chrome浏览器中对autoplay的一些处理技巧
date: 2020-09-11 21:08:00
updated: 2021-11-29 11:52:45
categories: 
  - 技术
tags: 
  - 浏览器
---






我在写博客的时候，想给博客网页添加自己喜欢的音乐，这样我在写作和阅读的时候，心情也会比较愉悦，这个时候，我们就需要用到`audio`这个标签。

<!-- more -->

````html html
 <audio src=""></audio>
````

同时audio标签还带有很多实用的属性，常用的有以下几个：

* src -- 这个就不说了，懂的都懂
* autoplay -- 如果出现该属性，音频在就绪后马上播放
* controls -- 网页中显示音频控件
* loop -- 循环播放
* muted -- 默认静音

但是我在设置 autoplay 的时候发现，chrome对自动播放深恶痛绝，直接从根源上限制了这个属性的开启，意思是说，这个属性直接禁用，在打开网页没有交互的情况下，不允许自动播放。

但仔细想一想，这个做法其实是对用户比较有利的。假设用户使用的时候宽带流量，直接自动播放视频、音频，就会对用户造成损失。甚至一些广告会自动播放，这就直接影响到了用户的体验。所以，对于chrome的做法我还是比较赞同的。

回过头一想，不对啊，我的目的是解决这个问题，不是夸赞谷歌的。我想给自己的个人博客添加喜欢的音乐，所以我找了一个不算办法的办法。我直接在模拟一个事件，当鼠标点击网页任意处的时候，自动触发autoplay的音频效果，直接上代码。

````js javascript
<script>
    function toggleSound() {
      var music = document.getElementById("vd");          
      //获取ID  
      console.log(music);
      console.log(music.paused);
      if (music.paused) { 
        //判读是否播放  
        music.paused=false;
        music.play(); 
        //没有就播放 
      }  
    }
    setInterval("toggleSound()",1);
</script>
````

这样处理过之后，插入音频，任意点击网页某个地方，都会触发播放效果，但凡事有利有弊，这样做的话，一旦开启播放，将无法启用暂停功能，也就是说会一直播放下去

如果是像我这样写个人博客，这个弊端倒是影响不大，我在这里记录一下这个方法。
