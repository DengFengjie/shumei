
function callServer(filePath)
	{
	let tmp=[]
				$.ajax({
					type:'get',
					url: 'http://127.0.0.1:3000/api/'+filePath,
					async:false,
					success: function(data){
						tmp = data;
						}
			})
	return tmp;

	}
	
	

function dijson(filePath){
	let tmp = callServer(filePath)
	var length = tmp.length
	var jslength = 0;
	var keyname = [];  //记录键名
	for (var i = 0; i < 1; i++) {
		var per = tmp[i];
		for(var key in per){
			keyname.push(key)
			jslength++
			}
		}
	//console.log(jslength)
	//console.log(length)
	let arr = new Array()
	for(var k = 0;k<jslength;k++){
		arr[k] = new Array();
	}
	for (var i = 0; i < tmp.length; i++) {
		var per = tmp[i];
		for(var key in per){
			let target = keyname.indexOf(key)
			arr[target].push(per[key])		
			}
			
	}
	//console.log(arr[0])
	return arr
	
	
}
//按照给定的divKey来分离数据。 比如给定一个divKey为‘2019’ 其中数据为‘2019年1-12月’
//提取所有2019年，然后再细分提取出1-12月作为arr[0] 依旧是二维数组 json有几个键就有几行。
function diverseForMonth(divKey,filePath){
	let arr = dijson(filePath)
	let DivArr = new Array()
	var jslength = arr.length
	for(var k = 0;k<jslength;k++){
		DivArr[k] = new Array();
	}
	var length = arr[0].length
	for(var i = 0;i<length;i++){
		const str = arr[0][i]
		const reg = RegExp(divKey);

		if(reg.test(str)){
			
			for(var j = 0;j<jslength;j++){
					DivArr[j].push(arr[j][i])
			}
		}
	}
	return DivArr
}