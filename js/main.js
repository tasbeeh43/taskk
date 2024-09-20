  
 var counter = 0;




  function increment(){
    document.getElementById("parent").innerHTML =counter;
    counter++;
  }



  function decrement(){
    document.getElementById("parent").innerHTML =counter;
    counter--;
  }




// -------------------------------------------




//   if condition 


// var price=20;
// if (price<=20){
//     alert("the price is cheap");
// }
// // }else{
// //     alert("the price is expensive");
// // }
// else if(price=20){
//     alert("the same price");
// }
// else if(price>20){
//     alert("very expensive");
// } else{
//     alert("enter number not text");
// } 




// var price= prompt("what is the price?");
// if (price<20){
//     alert("the price is cheap");
// }
// // }else{
// //     alert("the price is expensive");
// // }
// else if(price=20){
//     alert("the same price");
// }
// else if(price>20){
//     alert("very expensive");
// } else{
//     alert("enter number not text");
// } 



function validation(){
     var value = document.getElementById("text").value;
     var result = document.getElementById("father");

      if(value==""){
        result.innerHTML = "pls enter number";
        return false ;

    } else if(isNaN(value)){
        result.innerHTML = "pls enter number not text";
        return false;

    } else{
        result.innerHTML = value * 48 + " " + "egyption pound";
        return false;
    }
}




// ---------------------------------------



// switch 


// var club = prompt("what is the winner of fifa world cup 2022 ? "); 
// switch (club) {
//     case "eygpt":
//         alert("good choice");
//          break;

//     case "england":
//         alert("outdoor");  
//         break; 
    
//      case "moracoo" :
//             alert("outdoor");
//             break;

//     default :
//       alert("argantina is the winner of fifa world cup 2022");
         
//  }



// -----------------------------


// 1-string method

// var x= "hello world"; 
//  var result = x.length ;
//  alert(result);  
 

// 2- 
// var x= "hello world"; 
//  var result = x.indexOf("o",5) ;
//   alert(result);


// 3-
// var x= "hello world";
//  var result = x.lastIndexOf("l" ,5) ;
//   alert(result);

// 4-
// var x= "hello world";
//  var result = x.search("o") ;
//   alert(result);

// 5-
//  var x= "hello world hello ";
//   var result = x.slice(5 , 11) ;
//    alert(result);


// 6-
//  var x= "hello world hello ";
//   var result = x.substring(5,11) ;
//    alert(result);
   
// 7-
//  var x= "hello world hello ";
//   var result = x.substr(5,9) ;
//    alert(result);

// 8-   
//  var x= "hello world hello ";
//   var result = x.replace(/hello/i , "world") ;
//    alert(result);

// 9-
//  var x= "hello world hello ";
//   var result = x.toLocaleUpperCase() ;
//    alert(result);

// 10-   
//  var x= "hello world hello ";
//   var result = x.toLocaleLowerCase() ;
//    alert(result);

// 11-    
// var x= "HELLO world hello ";
//    var result = x.charAt() ;
//   alert(result);



   
   
