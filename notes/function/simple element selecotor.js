function fGetE(AsSelector){
  var aSelector=AsSelector.split(""),sSelector,eGeted,a_e_Geted=[];
  switch(AsSelector[0]){
   case '.':
   aSelector.shift()
   sSelector=aSelector.join("")
   eGeted=document.getElementsByClassName(sSelector)
   if(!eGeted||eGeted===null){
     throw new TypeError(AsSelector+' maybe illegal, has not get element')       
     return;
   }
   break;
   case '#':
   aSelector.shift()
   sSelector=aSelector.join("")
   eGeted=document.getElementById(sSelector)
   if(!eGeted||eGeted===null){
     throw new TypeError(AsSelector+' maybe illegal, has not get element')
     return;
   }
   return eGeted;
   break;
   default:
   sSelector=aSelector.join("")
   eGeted=document.getElementsByTagName(sSelector)
   if(!eGeted||eGeted===null){
     throw new TypeError(AsSelector+' maybe illegal, has not get element')
     return;
   }
   break;
 }

 for(i=0;i<eGeted.length;i++){
   a_e_Geted.push(eGeted[i])
 }
 return a_e_Geted;
}  
