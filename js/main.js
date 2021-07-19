let rightSide = document.getElementById("rightSide");
let allOldTaskBox;
let newTasksBTN = document.getElementById("newTasks");
// Date vars
let Days = ["Sun","Mon","Tue","Wen","Thr","Fri","Sat"];
let Months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// left side var
let DayNameLeftSide = document.getElementById("DayName");
let ClockLeftSide = document.getElementById("Clock");
let DayNumLeftSide = document.getElementById("DayNum");

// //////////////////////////////////////////////////////////////////

// click on menu btn & open linkBox
$("#menu").click(function(){
    let linkBoxOffset = $(".linkBox").offset().top;

    if(linkBoxOffset == 0){
        $(".linkBox").slideDown(1000);
        $(".linkBox").css("display","flex");
    }else{
        $(".linkBox").slideUp(1000);
    }
});

// get Data from storage

if(localStorage.getItem("allTaskBox") != null){
    allOldTaskBox = JSON.parse(localStorage.getItem("allTaskBox"));
    displayTaskBox();
}else{
    allOldTaskBox = [];
}

// click on new task icon
newTasksBTN.addEventListener("click",function(){
    displayTaskBox()
    createTaskBox()
});

// current Date
function getDateInfo(){
    // Date
    let theDate = new Date(); // all Date
    let theDayWeek = theDate.getDay(); // 0-6
    let theMonth = theDate.getMonth(); // 0-11
    let theDayMonth = theDate.getDate(); // 1-31
    let theHours = theDate.getHours(); // 1-24
    let theMinutes = theDate.getMinutes(); // 1-60
    let theSeconds = theDate.getSeconds(); // 1-60
    
    // left side
    setCurrentDateLeftSide(theDayWeek,theDayMonth,theMonth,theHours,theMinutes,theSeconds);
    
    setTimeout(getDateInfo,1000);
};
getDateInfo();

// change date left side
function setCurrentDateLeftSide(theDayWeek,theDayMonth,theMonth,theHours,theMinutes,theSeconds){
    DayNameLeftSide.innerHTML = Days[theDayWeek];
    DayNumLeftSide.innerHTML = theDayMonth +" "+ Months[theMonth];
    ClockLeftSide.innerHTML = theHours +":"+theMinutes+":"+theSeconds;    
};

/*
// change date right side

var dayNumber_NameRightSide;
var currentTimeRightSide;

(function setCurrentDateRightSide(){
    // Date
    let theDate = new Date(); // all Date
    let theMonth = theDate.getMonth(); // 0-11
    let theDayMonth = theDate.getDate(); // 1-31
    let theHours = theDate.getHours(); // 1-24
    let theMinutes = theDate.getMinutes(); // 1-60

    dayNumber_NameRightSide = theDayMonth +" "+ Months[theMonth];
    currentTimeRightSide = theHours +":"+theMinutes;
    // setTimeout(setCurrentDateRightSide,1000)
})();

console.log(dayNumber_NameRightSide,currentTimeRightSide);
*/

// display task box --- html
function displayTaskBox(){
    box="";
    for(var i=0 ; i<allOldTaskBox.length ; i++){
        box+=`
        <div class="mainTask">
            <div class="topBox">
                <p id="dayNumber_Name"></p>
                <p id="currentTime"></p>
            </div>
            <div class="tasksBox">
                <div class="task">
                    <input type="checkbox">
                    <p>Take a shower</p>
                </div>
            </div>
            <div id="inputBox${i}" class="inputBox">
                <input type="text" placeholder="New Task..">
            </div>  
            <div class="toolBox">
                <i id="addTask" onClick="clickAddIcon(${i})" class="fas fa-plus"></i>
                <i id="editTask" class="far fa-edit"></i>
                <i id="deleteTask" class="far fa-trash-alt"></i>
            </div>
        </div>
        `
    }
    rightSide.innerHTML = box;
};

// save taskBox in storage
function createTaskBox(){
    box="";
    for(var i=0 ; i<allOldTaskBox.length ; i++){
        box+=`
        <div class="mainTask">
            <div class="topBox">
                <p id="dayNumber_Name"></p>
                <p id="currentTime"></p>
            </div>
            <div class="tasksBox">
                <div class="task">
                    <input type="checkbox">
                    <p>Take a shower</p>
                </div>
            </div>
            <div id="inputBox${i}" class="inputBox">
                <input type="text" placeholder="New Task..">
            </div>  
            <div class="toolBox">
                <i id="addTask" onClick="clickAddIcon(${i})" class="fas fa-plus"></i>
                <i id="editTask" class="far fa-edit"></i>
                <i id="deleteTask" class="far fa-trash-alt"></i>
            </div>
        </div>
        `
        rightSide.innerHTML = box;
    }
    allOldTaskBox.push(box);
    localStorage.setItem("allTaskBox",JSON.stringify(allOldTaskBox));
};

// add task when click on add icon 
function clickAddIcon(currentTask){
    let inputBoxOffset = $(`#inputBox${currentTask}`).offset().top;

    if(inputBoxOffset == 0){
        $(`#inputBox${currentTask}`).slideDown(500);
    }else{
        $(`#inputBox${currentTask}`).slideUp(500);
    }    
};

// ////////////////////////////////////////


/*
// click on add task icon to open the input box for editing

$(".toolBox #editTask").click(function(){
    console.log("editTask");
})

// click on add task icon to delete task

$(".toolBox #deleteTask").click(function(){
    console.log("deleteTask");
})
*/