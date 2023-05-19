
function FXCompiler(max) {

	var FXArray = [];

	for(i=1; i<=max; i++) {

		FXArray[i-1] = JSON.parse("hackathon/smalldata/FX"+i+".json");
	}

	return FXArray;
}

function FXOCompiler(max) {

	var FXOArray =[];

	for(i=1; i<=max; i++) {

		FXOArray[i-1] =  JSON.parse("hackathon/smalldata/FXO"+i+".json");
	}

	return FXOArray;
}

function riskedCompiler(max) {

	var riskedArray = [];	

	for(i=1; i<=max; i++) {

		$.getJSON('hackathon/smalldata/risked'+i+'.json', function(response){
       riskedArray[i-1] = response;
 		});
	}

	return riskedArray;
}

