function(idCardNum,idCardNumValid){
	if(!idCardNumValid){
		return false
	}
	var ID=idCardNum
	var bornY=ID.slice(6,10)*1,bornM=ID.slice(10,12)*1,bornD=ID.slice(12,14)*1
	var today=new Date()
	var todayY=today.getFullYear(),todayM=today.getMonth()+1,todayD=today.getDate()
	//大于等于20周岁，小于35周岁
	if((bornY+20)<todayY&&(bornY+35)>todayY){
		return true
	}else{
		if(bornY+20===todayY){
			if(bornM<todayM){
				return true
			}else if(bornM===todayM){
				if(bornD<=todayD){
					return true
				}
			}
		}
		if(bornY+35===todayY){
			if(bornM>todayM){
				return true
			}else if(bornM===todayM){
				if(bornD>todayD){
					return true
				}
			}
		}
	}
	return false
}