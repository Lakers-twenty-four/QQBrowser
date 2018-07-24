# QQBrowser

目录索引：

[聪明的浏览器](#聪明的浏览器)

![](./mdImg/snipaste_20180724_213854.png)

# 聪明的浏览器

```js
$("#fullpage").fullpage({
  onLeave: function (index, nextIndex, direction) {
    if (index == 2) {
      $(".sec2TitleBox").addClass("sec2TitleBox_end_status");
      setTimeout (function(){
        //移除过渡的属性
        $(".sec2TitleBox").css("transition","none");
        // 会有一个 bug 会闪一闪 
        $(".sec2TitleBox").attr("class","sec2TitleBox sec2TitleBox_begin_status");
        //重新添加过渡的属性
        $(".sec2TitleBox").css("transition","transform .5s linear");
      },800); 
    }
 )}
```

1. 看代码 3行代码

   分析：第一行和第三行，本质就是没有添加！！！！！

2. 优化性能

3. 告诉浏览器，不要优化了！！！

   `document.querySelector(".s2_box").offsetTop;`

   浏览器一看，发现需要查询dom元素的某个属性

   此时，不敢偷懒，挨个来执行代码

4. 一切都是浏览器的锅！！

   既要优化浏览器-->做一些代码运行的改变

