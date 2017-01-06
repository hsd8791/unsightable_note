 function fGetTimeString(AiStart,AiEnd,AsSetValue){

  if(AsSetValue===undefined){
    var dNow= new Date();
  }else{
    var dNow= new Date(AsSetValue);
  }
  var iH=fToTwo(dNow.getHours());
  var iM=fToTwo(dNow.getMinutes());
  var iS=fToTwo(dNow.getSeconds());
  var iD=fToTwo(dNow.getDate())
  var iMonth=fToTwo(dNow.getMonth()+1)
  var iY=dNow.getFullYear()
  var sNow=iY+"-"+iMonth+"-"+iD+" "+iH+":"+iM+":"+iS;
  return sNow.slice(AiStart,AiEnd);
};
function fToTwo(aNum){
  return aNum>=10?aNum:"0"+aNum;
};
//yyyy-mm-dd hh:mm:ss ----(0,19)
//yy-mm-dd hh:mm:ss ----(2,19)
//mm-dd hh:mm:ss ----(5,19)
//hh:mm:ss ----(11,19)
//hh:mm ----(11,16)