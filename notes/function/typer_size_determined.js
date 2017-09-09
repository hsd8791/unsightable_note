///////////////////
///可以克隆一个出来啊~~~ //
///////////////////
/**
 *
 *	args———
 *  el:DOM元素
 *  duration：持续时间多久 unit:ms  
 *  delay:延迟触发时间
 *  callback:结束后运行
 *  style：需要修改的样式, 对象形式，key格式：驼峰
 */
var typeWrite = function(el, duration, delay, style, addClassName, callback) {
		var text = el.textContent
		var iSpeed = duration / (text.length)
			// var typerBox = el.cloneNode()

		// create new element for typing effection
		var typerBox = document.createElement('div')
			// console.log('el', el)
			// console.log(typerBox)
		typerBox.id = ''
		el.appendChild(typerBox)
		var color = window.getComputedStyle(el).color
		var font = window.getComputedStyle(el).font
		var height = window.getComputedStyle(el).height
		var width = window.getComputedStyle(el).width
		var padding = window.getComputedStyle(el).padding

		var newStyle = typerBox.getAttribute('style') ? typerBox.getAttribute('style') : '' +
			// 'background: rgba(111,0,0,0.2);'+
			'background:transparent;' +
			'border-width: 0px;' +
			// 'z-index: -9999;' +
			'position:absolute;' +
			// 'color:black;'+
			'top: 0;' +
			'left: 0;' +
			// 'padding: 0;' +
			'color: ' + color + ';' +
			'padding: ' + padding + ';' +
			'height: ' + height + ';' +
			'width: ' + width + ';' +
			'font: ' + font + ';' +
			'margin:0;'
		typerBox.setAttribute('style', newStyle)
		if (window.getComputedStyle(el).position === 'static') {
			el.style.position = 'relative'
		}
		el.style.zIndex = 1
		el.style.color = 'transparent'
		typerBox.style.background = typerBox.style.backgroundColor = 'transparent'
		setTimeout(function() {
				typing(typerBox, text, iSpeed, callback)
			}, delay)
			//el.style[key]  e.g. el.style['position']
			//for(x in b){ el.style[x]=b[x]}
	}
	/**
	 * [typing description]
	 * @param  {[type]}   el       [description]
	 * @param  {[type]}   text     [description]
	 * @param  {[type]}   speed    [description]
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */

var typing = function(el, text, speed, callback) {
	var len = text.length,
		pst = 0
	var T = setInterval(function() {
		pst++
		el.textContent = text.substring(0, pst)
		if (pst == len - 1) {
			clearTimeout(T);
			console.log('print end', el);
			if (callback !== undefined) {
				callback()
			}
		}
	}, speed)
}