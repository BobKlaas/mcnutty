//List of Prime Numbers: https://en.wikipedia.org/wiki/List_of_prime_numbers


//Form Sumbit Function
function formSubmit(){
    //Set local variable to value of inputFavNumber form input
    var favoriteNumber = document.getElementById('inputFavNumber').value;

    //Create object to house number stats
    var numberStats = {number:favoriteNumber, even: null, odd: null, prime: null};

    //Check to see if favoriteNumber is even, then set numberStats.even property
    numberStats.even = isEven(favoriteNumber);

    //Check to see if favoriteNumber is odd, then set numberStats.odd property
    numberStats.odd = isOdd(favoriteNumber);

    //Check to see if favoriteNumber is prime, then set numberStats.prime property
    numberStats.prime = isPrime(favoriteNumber);

    //Update DOM to reflect calculated stats
    setDomResult(numberStats);
}

//Determines if number is prime
function isPrime(num){
    for(var i=2; i < num; i++){
        if(num % i === 0){
            return 0;
        } 
    }    
    return num > 1;
}

//Determines if number is even
function isEven(num){
    var result = 0;

    //[IF] The modulus (remainder) of number = 0, number is odd
    if(num % 2 === 0) {
        var result = 1;
    }
    return result;
}

//Determines if number is odd
function isOdd(num){
    var result = 0;

    //[IF] The modulus (remainder) of number != 0, number is odd
    if(num % 2 !== 0) {
        var result = 1;
    }
    return result;
}

//Update DOM Number stats table
function setDomResult(stats){

    /** CODE BLOCK 1.0**********************************************
     * The code in this block will set the DOM table row to reflect if the number is odd.
     * The code below this code block 1.0 does the same task for even and prime. However,
     * even and prime use a more consolidated syntax and logic approach.
     * I did this two different ways so you can compare and contrast.
    *****************************************************************/
    
    //Set DOM element refrence to local javascript variable for ease of use
    var oddRowTF = document.getElementById("domStatOddTF");
    var oddRowDesc = document.getElementById("domStatOddDesc");

    //isOdd: [IF] Set isOdd DOM row to reflect true [ELSE] Set isOdd DOM row to reflect false
    if(stats.odd){
        //Set Text
        oddRowTF.innerHTML = 'TRUE';
        oddRowDesc.innerHTML = stats.number + ' is odd!';

        //Add bootstrap's CSS "text-success" (green) color class depending if isPrime true/false
        oddRowTF.classList.add("text-success");
        oddRowDesc.classList.add("text-success");
    }else{
        //Set Text
        oddRowTF.innerHTML = 'FALSE';
        oddRowDesc.innerHTML = 'Not odd.';

        //Remove bootstrap's CSS "text-success" (green) color class depending if isPrime true/false
        oddRowTF.classList.remove("text-success");
        oddRowDesc.classList.remove("text-success");
    }

    //****END CODE BLOCK 1.0****/

    //isEven: Update DOM row text to reflect result
    document.getElementById("domStatEvenTF").innerHTML = (stats.even)?'TRUE':'FALSE';
    document.getElementById("domStatEvenDesc").innerHTML = (stats.even)?stats.number + ' is even!':'Not even';

    //isEven: Add/Remove bootstrap's css "text-success" (green) color class depending if isEven true/false
    addRemoveClass('domStatEvenTF',(stats.even)?'add':'remove','text-success');
    addRemoveClass('domStatEvenDesc',(stats.even)?'add':'remove','text-success');
    
    //isPrime: Update DOM row to reflect result
    document.getElementById("domStatPrimeTF").innerHTML = (stats.prime)?'TRUE':'FALSE';
    document.getElementById("domStatPrimeDesc").innerHTML = (stats.prime)?stats.number + ' is prime!':'Not prime';
    
    //isPrime: Add/Remove bootstrap's css "text-success" (green) color class depending if isPrime true/false
    addRemoveClass('domStatPrimeTF',(stats.prime)?'add':'remove','text-success');
    addRemoveClass('domStatPrimeDesc',(stats.prime)?'add':'remove','text-success');
}

//Add or Remove CSS class from DOM Element
function addRemoveClass(elementID,action,className){
    //[IF] action==='add', add className to DOM element
    if(action==='add'){
        document.getElementById(elementID).classList.add(className);
    }

    //[IF] action==='remove', remove className from DOM element
    if(action==='remove'){
        document.getElementById(elementID).classList.remove(className);
    }    
}