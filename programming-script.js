
window.onload = function(){
    //declare variable for the buttons container div
    let buttonsContainer = document.querySelector("#buttons-container");
    
    //add event listener for the click of tab buttons
    buttonsContainer.addEventListener("click", buttonTabHandler);

    //click the first tab button
    document.querySelector(".tabButton").click();

    //clear all input spaces
    clearAllInputs();

    //declare array for the calculate buttons
    let btnsCalculateArray = document.querySelectorAll(".exerciseButtons");

    //add event listener for each calculate button
    btnsCalculateArray[0].addEventListener("click", calculateHandler1);
    btnsCalculateArray[1].addEventListener("click", calculateHandler2);
    btnsCalculateArray[2].addEventListener("click", calculateHandler3);
    btnsCalculateArray[3].addEventListener("click", calculateHandler4);
    btnsCalculateArray[4].addEventListener("click", calculateHandler5);
    btnsCalculateArray[5].addEventListener("click", calculateHandler6);
    btnsCalculateArray[6].addEventListener("click", calculateHandler7);
    btnsCalculateArray[7].addEventListener("click", calculateHandler8);
    btnsCalculateArray[8].addEventListener("click", calculateHandler9);
    btnsCalculateArray[9].addEventListener("click", calculateHandler10);
};

function buttonTabHandler(event){
    let buttonClicked = event.target;
   
    //remove the active class from all tab buttons
    deselectAllButtons();

    //add class active to clicked button
    buttonClicked.classList.add("active");

    //show content of correspondent active button
    //declare a string variable for the buttons id
    let btnID = buttonClicked.id;

    //declare string variable for the content area IDs
    let contentID = btnID.replace("btn", "ex");

    //hide all content areas
    hideAllContent();

    //remove hidden class from the selected content area
    document.querySelector("#" + contentID).classList.remove("hidden");
}

function deselectAllButtons()
{
    //create array with all tab buttons
    let buttonsArray = document.querySelectorAll(".tabButton");

    //run a for loop to remove active class from all tab buttons
    for (let i = 0; i < buttonsArray.length; i++) {
        buttonsArray[i].classList.remove("active");        
    }
}

function hideAllContent(){
    //create array with all the content areas
    let contentArray = document.querySelectorAll(".contentArea");

    //run a for loop to add class hidden to each content area
    for (let i = 0; i < contentArray.length; i++) {
        contentArray[i].classList.add("hidden");
    }
}

function clearAllInputs(){
    let allInputs = document.querySelectorAll("input");

    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].value = '';        
    }
}

//function: handles click exercise 1
function calculateHandler1(){
    //declare variables for the input numbers
    let min = +document.querySelector("#minNumber").value;
    let max = +document.querySelector("#maxNumber").value;

    //declare variable for the output
    let outputList = document.querySelector("#outputList1");
    outputList.innerHTML = "";

    //verify if max > min
    if(max >= min){
        //for loop to display numbers between min and max
        for (min; min <= max; min++) {
        outputList.innerHTML += "<li>" + min + "</li>";            
        }
    }
    else{
        //show alert message if input doesn't meet the conditions
        alert("Max number must be greater than or iqual to min number!");
    }
}

//function: handles click exercise 2
function calculateHandler2(){
    //declare string variable for the input
    let stringInput = document.querySelector("#stringEx2").value;

    //create array of strings using splitted string in each comma
    let stringsArray = stringInput.split(",");

    //declare variables for the total, smallest, and largest
    let total = 0;
    let smallest = +stringsArray[0];
    let largest = +stringsArray[0];
    let nValues = stringsArray.length;


    for (let n = 0; n < stringsArray.length; n++) {
        total += +stringsArray[n];
        
        //verify if number is smaller than smallest
        if (+stringsArray[n] < smallest) {
            smallest = +stringsArray[n];
        }
        //verify if number is larger than largest
        else if (+stringsArray[n] > largest) {
            largest = +stringsArray[n];
        }
    }

    //declare variable for the output list
    let outputList = document.querySelector("#outputList2");

    //write output in list format and add to html doc
    outputList.innerHTML = "<li>Number of values: " + nValues +
                "</li><li>Total: " + total +
                "</li><li>Average: " + (total/nValues).toFixed(1) +
                "</li><li>Smallest: " + smallest + 
                "</li><li>Largest: " + largest;                
}

//function: handles click exercise 3
function calculateHandler3(){
    //declare a variable for the input string of numbers
    let stringInput = document.querySelector("#stringEx3").value;

    //create array of strings using splitted string in each comma
    let stringsArray = stringInput.split(",");

    //declare a variable for the key
    let keyNumber = +document.querySelector("#keyEx3").value;

    //declare variable for the counter of keys
    let counter = 0;

    //convert to numbers each item in strings Array, calculate total
    for (let i = 0; i < stringsArray.length; i++) {
        if (+stringsArray[i] === keyNumber){
            counter++;
        }  
    }    

    //display results
    document.querySelector("#outputEx3").innerHTML = 
        "The key number " + keyNumber + " appears " + counter + " time(s) in the set."
}

//function: handles click exercise 4
function calculateHandler4(){
    //declare variable for the input
    let inputNumber = +document.querySelector("#numEx4").value;

    //declare string variable for the output
    let output = "";

    //verify if number typed is greater than 1
    if (inputNumber >= 1){
        for (let i = 0; i < inputNumber; i++) {
            output += "*";            
        }
    }
    else{
        ////show alert message if input doesn't meet the conditions
        alert("Number typed must be iqual to or greater than 1!")
    }

    //display output
    document.querySelector("#outputEx4").innerHTML = output;
}

//function: handles click exercise 5
function calculateHandler5(){
   //declare variables for the inputs and convert to numbers
   let numStars = +document.querySelector("#numStarsEx5").value;
   let max = +document.querySelector("#maxStarsEx5").value;

   //declare variable for the output
   let output = "";

   //verify if the numbers entered are greater than or iqual to 1
   if (numStars >= 1 && max >= 1) {
      //get integer part of result of the division
      let intPart = Math.floor(numStars/max);

      //get reminder of division
      let rem = numStars%max;

      //add lines with the max number of stars, until reach the integer part of division
      for (let i = 0; i < intPart; i++) {
          //add stars until reach the max number per line
            for (let n = 0; n < max; n++) {
                output += "*";                
            }
            
            //break line when reach the max number of stars
            output += "<br>";
        }
      
      //add one more line to output with the reminder number of stars
        for (let n = 0; n < rem; n++) {
            output += "*";            
        }
   }
   else{
       //show alert message if input doesn't meet the conditions
       alert("Numbers entered must be greater than or iqual to 1!");
   }

   //display the results
   document.querySelector("#outputEx5").innerHTML = output;
}

//function: handles click exercise 6
function calculateHandler6(){
    //declare variable for the input
    let inputString = document.querySelector("#inputEx6").value;

    //declare variable with string uppercase
    let upperString = inputString.toUpperCase();

    //declare counter for the vowels
    let counter = 0;

    //declare empty string for the output
    let outputString = "";

    //verify if each character matches vowels
    for (let i = 0; i < upperString.length; i++) {
        //declare variable for each character
        let eachCharacter = upperString.charAt(i);

        //verify if the character is a vowel
        if (eachCharacter === "A" || eachCharacter === "E" || eachCharacter === "I"
            || eachCharacter === "O" || eachCharacter === "U") {
                
                //if the character is a vowel, add 1 to the vowel counter
                counter++;

                //and add a "*" to the output string
                outputString += "*";
        }
        else{
            //if the character is not a vowel, add the original character to output string
            outputString += inputString.charAt(i);
        }

        //display the output
        document.querySelector("#outputEx6").innerHTML = "<li> Number of vowels: " + counter + "</li>";
        document.querySelector("#outputEx6").innerHTML += "<li> New string: " + outputString + "</li>";
        
    }

}

//function: handles click exercise 7
function calculateHandler7(){
    //declare variable for the number of items and convert to number
    let numItems = +document.querySelector("#inputEx7").value;

    //declare variable for shipping cost
    let shipping;
    
    //verify if input less than one
    if (numItems < 1) {
        alert("Number of items must be at least 1!");
    }
    else{
        //if number of items is between 100 and 1000, change shipping to 5
        if (numItems < 100) {
            shipping = 5;
        }
         //if number of items is greate than 1000, change shipping to 3
        else if(numItems > 1000){
            shipping = 3;
        }
        //if number of items is between 100 and 100, change shipping to 4
        else{
            shipping = 4;
        }

        //declare variable and calculate the base cost
        let baseCost = numItems * shipping;

        //declare variable and calculate the tax
        let tax = 0.15 * baseCost;

        //declare variable and calculate the total
        let total = baseCost + tax;


        //display output
        document.querySelector("#outputEx7").innerHTML = "Base Cost: $" + baseCost.toFixed(2) + 
            "<br>Tax: $" + tax.toFixed(2) + "<br>Total: $" + total.toFixed(2) ;

    }

}

//function: handles click exercise 8
function calculateHandler8(){
    //declare variable for the input and convert to number
    let numBars = +document.querySelector("#inputEx8").value;

    //declare variables for number of boxes, number of singles, 
    //cost of boxes, cost of single bars and total cost
    let numBoxes, numSingle, costBoxes, costSingle, total;


    //verify if bars typed is less than 1
    if (numBars < 1) {
        alert("Number of bars must be at least 1!");
    }
    else{
        //1 box = 24 bars = 32.00
        //1 bar = 1.75
        
        //calculate
        numBoxes = Math.floor(numBars / 24);
        numSingle = numBars % 24;
        costBoxes = numBoxes * 32.00;
        costSingle = numSingle * 1.75;
        total = costSingle + costBoxes;

        //display results
        document.querySelector("#outputEx8").innerHTML = "Number of boxes: " + numBoxes +
            "<br>Number of Single Bars: " + numSingle + "<br>Cost of Boxes: $" + costBoxes.toFixed(2) + 
            "<br>Cost of Single Bars: $" + costSingle.toFixed(2) + "<br>Total Cost: $" + total.toFixed(2);
    }
}

//function: handles click exercise 9
function calculateHandler9(){
    //declare variable for the input and convert to number
    let binString = document.querySelector("#inputEx9").value;

    //declare array for the exponentials
    let expNums = [];

    //declare variables for the output
    let outputPart1 = "";
    let outputPart2 = ""; 
    let outputDecimal = 0;

    //declare variable to validate data
    let isvalid = true;

    //loop for each character of input
    for (let i = 0; i < binString.length; i++) {
        //if character is 0, calculate exponential and put in the array 
        if (binString.charAt(i) === "0") {
            //calculate exponential and put in the array
            expNums[i] = binString.length - 1 - i;
        }
        //if character is 1, calculate exponential and put in the array + calculate and add to output strings
        else if (binString.charAt(i) === "1"){
            //calculate exponential and put in the array
            expNums[i] = binString.length - 1 - i;

            //add to the string the exponentials without calculate
            outputPart1 += " + " + 2 + "<sup>"+ expNums[i] +"</sup>"; 

            //add to the string the exponentials calculated
            outputPart2 +=  " + " + +binString.charAt(i) * Math.pow(2 , +expNums[i]);

            //add to the decimal number
            outputDecimal += +binString.charAt(i) * Math.pow(2 , +expNums[i]);
        }         
        else{
            //if numbers entered are different from 0 or 1
           isvalid = false;
        }
    }

    //if input is valid, display results
    if (isvalid) {
        //cut first "+" signal from outputPart1 and outputPart2
        outputPart1 = outputPart1.slice(3);
        outputPart2 = outputPart2.slice(3);
         
        //display the complete output
        document.querySelector("#outputEx9").innerHTML = outputPart1 + " = " + outputPart2 + " = " + outputDecimal;
    }
    //if input is not valid display alert
    else{
        alert("Data entered must be a binary number!");
    }
}

//function: handles click exercise 10
function calculateHandler10(){
    //declare variables for the inputs and convert to number
    let angle1 = +document.querySelector("#inputAngle1").value;
    let angle2 = +document.querySelector("#inputAngle2").value;
    let angle3 = +document.querySelector("#inputAngle3").value;

    //declare variable for the output space
    let output = document.querySelector("#outputEx10");

    //validate the conditions and display different error messages
    //validate data intered meets the first condition
    if (angle1 !== 0 && angle2 !== 0 && angle3 !== 0){
        //validate data intered meets the second condition
        if ( angle1 < 180 && angle2 < 180 && angle3 < 180) {
            //validate data intered meets the third condition
            if (angle1 + angle2 + angle3 === 180) {

              //if data entered meets the three conditions, calculate the type of triangle
              //first verify if any angle is iqual to 90 -> right triangle
              if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
                  output.innerHTML = "Right Triangle"; 
              }
              //if there's no angle iqual to 90, verify if any angle is greater than 90 -> obtuse triangle
              else if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
                output.innerHTML = "Obtuse Triangle";
              }
              //at last, if any angle is less than 90 -> Acute triangle
              else{
                output.innerHTML = "Acute Triangle";
              }   
            }
            //if third condition is not met, display error msg
            else{
                alert("Sum of angles must be iqual to 180!"); 
            }            
        }
        //if second condition is not met, display error msg
        else{
            alert("Angles cannot be greater than or iqual to 180!"); 
        }
    }    
    //if first condition is not met, display error message
    else{
        alert("Angles cannot be iqual to zero!");
    }
}