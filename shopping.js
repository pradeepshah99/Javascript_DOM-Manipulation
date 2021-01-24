
// code for addiing the data in to the list and making focus on the input area with making the field blank after the submission

document.addEventListener('DOMContentLoaded', (event)=> // this event is to check that page is loaded or not
{
    // console.log("Page is ready for the work") // 

   var data =  document.querySelector('#add'); // getting the access of button
   data.addEventListener('click', ()=>          // adding event on the button
   {
       var value = document.querySelector('#item').value;   // capturing the value from the input
    //    var ul = document.createElement("ul");
       var li = document.createElement("li");                   // creating the "li"
       var text = document.createTextNode(value);  
       var button = document.createElement('button');
       var buttonNode = document.createTextNode('Delete');
                 button.setAttribute('id', 'mybtn') ;                                             // craeting the node text
       li.appendChild(text)  
       button.appendChild(buttonNode);                            // appending the node text to the li
       document.querySelector('#data').appendChild(li).appendChild(button)        // return the value to page having ID
        
       document.getElementById('item').value = null;            // keeping input blank after submission

       document.querySelector('#item').focus();                 // makig focus on the input field

       // click event for te delete button
       var  deleteData = document.querySelector('#mybtn');
       deleteData.addEventListener('click', (event)=>{
           document.querySelector('li').remove();
       })




   })

})