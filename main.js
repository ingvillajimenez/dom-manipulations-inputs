document.querySelector("#reset-field-btn").addEventListener('click', function(){
      // TASK #1
  var text = document.querySelector(".ex1-text");
  text.value = "";

  })


document.querySelector("#validate-field-btn").addEventListener('click',function(){
  // TASK #2
  var text = document.querySelector(".ex2-text");
  var message = document.querySelector(".flash-message");
  var length = text.value.length;
  if(length < 6){
    message.textContent = "Input not long enough";
    message.classList.add("invalid");
    message.classList.remove("valid");
  }
  else {
    message.textContent = "Field valid";
    message.classList.add("valid");
    message.classList.remove("invalid");
  }

})


document.querySelector("#calculate-items-btn").addEventListener('click', function(){
  // TASK #3
  var sum = 0;
  var items = document.querySelectorAll(".item-input");
  items.forEach(function(item){
    if(item.checked === true){
      sum += parseInt(item.value);
    }
  });
  var total = document.querySelector(".sum-total");
  total.textContent = "$ " + sum;
})


document.querySelector("#select-to-show-more-btn").addEventListener('click', function(){
  // TASK #4
  var options = document.querySelectorAll("option");
  var selection = document.querySelector(".selection");
  var imgBox = document.querySelector(".img-box");
  var model = document.querySelector(".model");
  var msrp = document.querySelector(".msrp");
  var mpg = document.querySelector(".mpg");
  var edmunds = document.querySelector(".edmunds");

  options.forEach(function(option){
    if(selection.selectedIndex === option.index){
      imgBox.innerHTML = "<img src='images/" + option.dataset.img + "'></img>";
      model.textContent = option.value;
      msrp.textContent = option.dataset.msrp;
      mpg.textContent = option.dataset.mpg;
      edmunds.textContent = option.dataset.edmunds;
    }
  });
});
