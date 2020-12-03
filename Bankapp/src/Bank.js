let data={
    test1:{username:"test1",password:"test1",accno:1001,balance:5000,history:[]},
    test2:{username:"test2",password:"test2",accno:1002,balance:8000,history:[]},
    test3:{username:"test3",password:"test3",accno:1003,balance:7000,history:[]},
    test4:{username:"test4",password:"test4",accno:1004,balance:4000,history:[]}

}
    let newData = localStorage.getItem('data');
    if (newData) {
      data = JSON.parse(newData);
      
    } 
      class Bank{
   
      static currentUser="";
      static getUser(){
         return data;
      }
      static saveData(){
        localStorage.setItem("data",JSON.stringify(data));
      } 
        
      
      static getAccountDetails(){
        return data;
      }
      static setcurrentUser(uname){
        localStorage.setItem("currentUser",uname);
        
      }
      static getcurrentUser(){
       return localStorage.getItem("currentUser");
        
      }
      
     static addUser(username,password,accno){
        data[username]={username,password,accno,history:[],balance:0};
        Bank.saveData();
     }
     static deleteUser(username){
       delete data[username];
     }
     static getHistory(){
       return data[Bank.getcurrentUser()].history;
     }
     
     

}
export default Bank;