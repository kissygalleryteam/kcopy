## kcopy

* 版本：1.0
* 教程：[http://gallery.kissyui.com/kcopy/1.0/guide/index.html](http://gallery.kissyui.com/kcopy/1.0/guide/index.html)
* demo：[http://gallery.kissyui.com/kcopy/1.0/demo/index.html](http://gallery.kissyui.com/kcopy/1.0/demo/index.html)

## 组件说明

* 1、组件非原创，由ZeroClipboard.js改写而来
* 2、由于ZeroClipboard.swf回调JS函数时，使用了ZeroClipboard命名空间，故组件中保留`window["ZeroClipboard"] = Kcopy`
* 3、由于第二点，故Kcopy与ZeroClipboard不能同时使用
* 4、保留了大部分ZeroClipboard原型，使用方法基本一致

## 配置说明

* @param element{#id|node} 组件初始化将绑定复制功能的元素（一般为按钮，也可以是其他节点）
* @param options{Object} 组件其他配置项
	* @property moviePath{String} 用于实现复制到剪切板功能的swf文件地址，为避免跨域问题，应尽可能使用同域地址
	* @property trustedOrigins{String} 可靠的源，一般使用默认值
	* @property text{String} 将被复制的内容
	* @property hoverClass{String} 按钮hover样式
	* @property activeClass{String} 按钮按下样式
	* @property allowScriptAccess{String} 允许swf文件执行脚本，可选值：`never`、`always`、`someDomain`，默认值`someDomain`
	* @property useNoCache{Boolean} 是否使用缓存
	* @property forceHandCursor{Boolean} 是否启用鼠标手型

## 组件方法

* setCurrent(ele)：设置当前的控制器

    ```
    kcopy.setCurrent(S.one("#KC-Button"));
    ```
* setSize(width, height)：设置flash覆盖范围

    ```
    kcopy.setSize(15, 15);
    ```
* setTitle(text)：设置鼠标移入按钮时的提示文案

    ```
    kcopy.setTitle("点击复制卡号");
    ```
* setText(text)： 设置点击被复制到剪贴板的内容（常用）

    ```
    kcopy.setText("ZHANGSAN");    
    ```
* on/off(eventName, fn)：注册和注销事件，可选事件：`load`、`mouseover`、`mouseout`、`mousedown`、`mouseup`、`datarequested`、`complete`

    ```
    kcopy.on("complete", function(client, args){
        alert("复制【" + args.text + "】成功");
    });
    ``` 
* setHandCursor(bool)：设置鼠标手势

    ```
    kcopy.setHandCursor(true);
    ```

## 使用示例
HTML结构如下：

```
<h2>KISSY版ZeroClipboard</h2>
<p>
    卡号：<input type="text" id="KC-Test" class="J_Text" value="Default String.">
    <input type="button" value="复制" id="KC-Button" class="KC-Button" title="点击复制">
</p>
<p>
    卡密：<input type="text" id="KC-Test-Two" class="J_Text" value="Second String.">
    <input type="button" value="复制" id="KC-Button-Two" class="KC-Button" title="点击复制">
</p>
<h2>复制记录</h2>
<ul id="CopyRecord"></ul>
<textarea name="" id="" cols="30" rows="10" class="J_Check">
    在此textarea中粘贴(Ctrl+C/鼠标右键)，以检查内容复制是否正确。
</textarea>
```

示例脚本：

```
S.one(".J_Check").on("focus", function(e){
    S.one(".J_Check").val("");
});

var record = S.one("#CopyRecord");
var copyinp = S.one("#KC-Test");
S.use('gallery/kcopy/1.0/index', function (S, Kcopy) {
    var kcopy = new Kcopy("#KC-Button", {
        moviePath: "./zeroclipboard/ZeroClipboard.swf",
        forceHandCursor: false,
        allowScriptAccess: "always"
    });

    S.all(".KC-Button").on("mouseover", function(e){
        kcopy.setCurrent(S.one(this));
        copyinp = S.one(this).parent("p").one(".J_Text");
        kcopy.setText(copyinp.val());
    });

    kcopy.on("complete", function(client, args){
        var clds = record.children();
        if (clds.length > 0) {
            S.one('<li class="item">最新复制内容为：' + args.text + '</li>').insertBefore(clds[0]);
        } else {
            record.append('<li class="item">复制内容为：' + args.text + '</li>');
        }
        var newStr = new Date().getTime().toString().substr(0, Math.random() * 7 + 1);
        copyinp.val(newStr);
        kcopy.setText(newStr);
    });
});
```

## changelog

### 20131004

* 版本移植，提供可用demo


