var aBtn = document.getElementById('alUs');
var actBtn = document.getElementById('actUs');
var aAnsr = document.getElementById('allUsers');
var actAnsr = document.getElementById('aUsers');

aBtn.addEventListener("click",callback)
  function callback(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if(request.readyState === 4 && request.status < 400){
        var search = JSON.parse(request.responseText);
        var status = search.users
        aAnsr.innerHTML=""
        for (var i = 0; i < status.length; i++) {
          var add = document.createElement("li");
          add.innerHTML = status[i].user_data.first_name +" "+ status[i].user_data.last_name
          aAnsr.appendChild(add)
        }
        // console.log("bucket: ",bucket);
      }
    }

    request.open("GET", "http://localhost:3000/users")
    request.send()
  }


//***********************************************
actBtn.addEventListener("click",callback1)
  function callback1(){

    var request1 = new XMLHttpRequest();
    request1.onreadystatechange = function(){
      if(request1.readyState === 4 && request1.status < 400){
        var search = JSON.parse(request1.responseText);
         var status = search.aUsers
         console.log("status ",search);
         actAnsr.innerHTML=""
         for (var i = 0; i < status.length; i++) {
           var add = document.createElement("li");
           add.innerHTML = status[i].first_name +" "+ status[i].last_name
           actAnsr.appendChild(add)
         }

      }
    }

    request1.open("GET", "http://localhost:3000/active-users")
    request1.send()
  }
