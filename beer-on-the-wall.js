
var beerSong = function(numBeers) {

		if(numBeers === 1){
			console.log( numBeers + " bottle of beer on the wall");
		 	console.log( numBeers + " bottle of beer");	

	 		console.log( "Take it down and pass it around, No more bottles of beer on the wall." );
	 	}
	 	else{
	 	console.log( numBeers + " bottles of beer on the wall");
	 	console.log( numBeers + " bottles of beer"); 

	 	var oneLess = numBeers -1; 
	 	console.log( "Take one down and pass it around, " + oneLess +  " bottles of beer on the wall. \n");

	 	beerSong(oneLess);
	 	}
} 

beerSong(99); 

