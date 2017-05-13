	function setClass(dom,newClass){
		var children=dom.parentElement.children
		var len=children.length,classNames
		for(let i=0;i<len;i++){
			classNames=children[i].className.replace('  ',' ').split(' ')
			for(let j=0;j<classNames.length;j++){
				classNames[j]===newClass?classNames[j]='':classNames[i]
			}
			children[i].className=classNames.join(' ')
		}
		dom.className=newClass+' '+dom.className
	}
	//args: dom————active element, newClass————avtive class