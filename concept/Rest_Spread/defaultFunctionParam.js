
const multi = (num, mult = 2) => {
    return num * mult;
};

console.log(multi(10, 3));//10 * 3

console.log(multi(10));//10 * 2

console.log(multi());//NaN = undefined * 2

//--------------------------------

const groceryItem = (
    title, 
    qty, 
    item = {
    groceryItemtitle: title,
    groceryItemQty: qty,
    //groceryItemprice: price //trying to handle the price value before it get inialized
    //Uncaught ReferenceError: Cannot access 'price' before initialization
}, 
price) => {
console.log(title, qty, item)
};

//groceryItem("banana", 5);

//---------------------------
const warning = (title) => {
    console.log(
        title !== undefined
        ? `color is missing for the ${title}`
        : ` both color and button is missing`
    );
    throw new Error (`this is new error message for `+title);
}

const btn = (title = warning(), color = warning(title)) => {
    console.log(title);
};

btn("button 1", "grey");

btn(`button 2`);

btn();


//challenge

//Create a function  with two param city and weather

//if weather is absent means should get value = great weather

const weatherForecast = (city, weather)=> {
    
    //weather = weather || "great weather";
    //a || b -> b if a is falsy(0, "", null, undefined)
    
    weather = weather !== undefined
    ? weather
    : "great weather"

    return `weather forcast for ${city}: ${weather}`
}

console.log(weatherForecast("dubai", "sunny"));

console.log(weatherForecast("london", "light rain"));

console.log(weatherForecast("paris"));

console.log(weatherForecast("part", ""));

console.log(weatherForecast("mas", undefined));


/*
challenge 2

create a func with two parameters task and taskwithId
- before performing any actions inside of the function need 
to generate unique 4 digit of taskId for missing one
- log the detail in console for no of taskId is missing
- function should return array of tasks sorted by taskId,
all sorted array must have taskId

- Original task should remain unchanged
- new Unique 4 digit id is not same as existing
 

//generate unique 4 digit number

//console.log(parseInt(Math.random() * 10000));
//console.log(1000 + Math.floor(Math.random() * 9000));

//generating random number and assigning the value to taskId missing 
const generateTasksId = tasks => {
    return tasks.map(task => {
        if(!task.hasOwnProperty("taskId")){
            let newTaskId = 1000 + Math.floor(Math.random() * 9000);
            task.taksId = newTaskId;
        }
        return task;
    }) 
};

//By above method the new value is mutated to existing object array
//to avoid this we need to create an array copy using rest parameter

const generateTasksId = tasks => {
    return tasks.map(({...task}) => {
        //task = {...task}; this line instead of above {...task}
        if(!task.hasOwnProperty("taskId")){
            let newTaskId = 1000 + Math.floor(Math.random() * 9000);
            task.taksId = newTaskId;
        }
        return task;
    }) 
};
*/

//in this case we generate taskid and check weather it is unique Id no
const generateTasksIds = tasks => {
    let newTaskIds = [];
    return tasks.map(({...task}) => {
        if(!task.hasOwnProperty("taskId")){
            //let newTaskId = 1000 + Math.floor(Math.random() * 9000);
            let newTaskId;
            do{
                newTaskId = 1000 + Math.floor(Math.random() * 9000);
               // console.log(newTaskId);
            }while(
        //in this case it will check weather already present or not then return undefined
                tasks.find(task => task.taskId === newTaskId) ||
        //to avoid undefined we will check in new array weather it is added in it
                newTaskIds.includes(newTaskId));
        //if not present add to new array for reference
                newTaskIds.push(newTaskId);
            
            task.taskId = newTaskId;
        }
        return task;
    }) 
};

//display how many object have taskId missing
const tasksSortedByIds = (tasks, 
    taskWithIds = generateTasksIds(tasks)) => {
    console.log(`quantity of missing taskIds is ${
    tasks.filter(task => !task.hasOwnProperty("taskId"))
    .length}`);
    return taskWithIds.sort((a, b) => a.taskId - b.taskId);
};


const tasks = [
{title: "good morning", taskId: 1122},
{title: "good afternoon", taskId: 2133},
{title: "evening"},
{title: "good evening", taskId: 5144},
{title: "morning"},
{title: "good night", taskId: 6155}
];

console.log("sorted array tasks:", tasksSortedByIds(tasks));

console.log("orignal unsorted array: ", tasks);

