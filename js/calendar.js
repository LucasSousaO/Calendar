let dateToday = new Date();

const yearsMonth = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

new Vue({
    el: "#calendar",
        data:{
            date: dateToday.getDate()+"/"+dateToday.getMonth()+"/"+dateToday.getFullYear(),     //DD/MM/YYYY
            day: dateToday.getDate(),                                                           //DD
            month: yearsMonth[dateToday.getMonth()],                                            //MMMM
            year: dateToday.getFullYear(),                                                      //YYYY
            actualMonth: yearsMonth[new Date().getMonth()].toUpperCase(),                       //MMMM TO UPPERCASE
            lastDay: new Date(2019, dateToday.getMonth()+1, 0).getDate(),                       //DD LAST DAY OF THE MONTH
            HH:new Date().getHours(),                                                           //HH
            MM:new Date().getMinutes(),                                                         //MM
            SS:new Date().getSeconds(),                                                         //SS
            DDDD: weekDay[dateToday.getDate()].toUpperCase(),                                   //WEEK DAY UPPERCASE
            months: [{mes: "January", id: "0"},{mes: "February", id: "1"},{mes: "March", id: "2"},{mes:"April", id: "3"},{mes: "May", id: "4"},{mes: "June", id: "5"},{mes: "July", id: "6"},{mes: "August", id: "7"},{mes: "September", id: "8"},{mes: "October", id: "9"},{mes: "November", id: "10"},{mes: "December", id: "11"}],
            weekDia: weekDay[dateToday.getDate()],                                              //WEEK DAY
            headers: [{dia: "Sunday"},{dia: "Monday"},{dia: "Tuesday"},{dia: "Wednesday"},{dia: "Thursday"},{dia: "Friday"},{dia: "Saturday"}],
        },
        watch:{
            //ATUALIZA HORA - NÃO ESTÁ FUNCIONANDO
            HH(){
               return this.HH != new Date().getHours()?new Date().getHours(): this.HH;
            },
            MM(){
                return this.HH != new Date().getHours()?new Date().getHours(): this.HH;
            },
            SS: () =>{ console.log("mudou");
                return this.SS = new Date().getSeconds();
            },

        },

        methods:{
                monthUpdate: function(newMonth){
                    //$(".table").addClass("escolhido");
                        //GET THE MONTH
                        this.month = yearsMonth[newMonth];
                        //UPDATE FOR THE NEXT MONTH
                        let newDate= new Date(this.month + ","+ 01  +",2019"); //dateToday1 = new Date("03,03,2019");
                        let lastDay = new Date(2019, newDate.getMonth()+1, 0).getDate();
                        let firstDay = weekDay[newDate.getDay()];
                        //CLEANING THE FULL TABLE
                            for(let dd = 1; dd <= lastDay; dd++){
                                $("#"+dd).remove();
                                }
                            for(dd=0;dd<7;dd++){ 
                                $("#"+weekDay[dd]).remove();
                                }
                        //SET ACTUAL DAY AND CREATE WEEK
                        let actualDay = dateToday.getDate();
                        let actualMonth = dateToday.getMonth();
                        createWeek();

                        //CREATE EMPTY SLOT
                        let ajustFirstDay =0;
                        firstDay != "Sunday"?  ajustFirstDay = 0 : ajustFirstDay = newDate.getDay();

                            while(ajustFirstDay<newDate.getDay()){
                                let insertDay = "<ul>&nbsp</ul>";
                                $("#"+ weekDay[ajustFirstDay]).append(insertDay);
                                ajustFirstDay++;
                            }  
                        //INSERT NUMBERS IN THE TABLE
                        for(let dd = 1; dd <= lastDay; dd++){
                            let insertDay ='';
                            newDate = new Date(this.month + ","+ dd  +",2019");
                            (dd == actualDay)&&(actualMonth==newDate.getMonth())? insertDay = "<ul class= today " + weekDay[newDate.getDay()] +" id="+dd+">"+dd+"</ul>": insertDay = "<ul class= " + weekDay[newDate.getDay()] +" id="+dd+">"+dd+"</ul>";
                             $("#"+ weekDay[newDate.getDay()]).append(insertDay)
                             }  
                },
        },
});

  let comeca = function(month){
    let actualDay = new Date().getDate();
    let actualMonth = new Date().getMonth();
    let ajuste = new Date((month+1) + ","+ 01  +",2019").getDay();

    createWeek();

     //create table title
     let lastDay = new Date(2019, new Date(month + ","+ 01  +",2019").getMonth(), 0).getDate();
     let firstDay = weekDay[new Date((month+1) + ","+ 01  +",2019").getDay()]; 


     let ajustFirstDay =0;

     firstDay != "Monday"?  ajustFirstDay = 0 : ajustFirstDay = ajuste;
         //empty slot
         console.log(firstDay);
         console.log(ajuste);
         while(ajustFirstDay<ajuste){
             let insertDay = "<ul>&nbsp</ul>";
             $("#"+ weekDay[ajustFirstDay]).append(insertDay);
             ajustFirstDay++;
         }  

             //create the real table
             for(let dd = 1; dd <= lastDay; dd++){
                 let insertDay ='';
                 newDate = new Date(month+1 + ","+ dd  +",2019");
                 (dd == actualDay)&&(actualMonth==newDate.getMonth())? insertDay = "<ul class= today " + weekDay[newDate.getDay()] +" id="+dd+">"+dd+"</ul>": insertDay = "<ul class= " + weekDay[newDate.getDay()] +" id="+dd+">"+dd+"</ul>";
                     //let insertDay = "<ul class= " + weekDay[newDate.getDay()] +">"+dd+"</ul>";
                     $("#"+ weekDay[newDate.getDay()]).append(insertDay);
             }
  }
//  FUNCTIONS
  let createWeek = function (){
    for(let dd=0;dd<7;dd++){ //create table title
        $(".table-month").append("<ul id="+weekDay[dd]+" class='week-days'>"+weekDay[dd]+"</ul>");
    }
  };

  
  comeca(new Date().getMonth());

    