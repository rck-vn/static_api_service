var receive = require("./data")

module.exports = {
  names: function(){
     return receive;
  },
  getAllActiveUsers: function(){
    var bucket = []
     for (var i = 0; i < receive.length; i++) {
       var active = receive[i].user_data.active
      //  console.log("received data: ",active)
       if (active === 1) {
         bucket.push(receive[i].user_data)
       }
     }
     return bucket
  },
  getOneUser: function(){

  }
}
