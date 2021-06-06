//import click, {type, getText} from "./exp_file.js"
//import {click, type, getText} from "./exp_file.js"

//to import all function
//import * as fn from "./exp_file.js"

//To import a class
import Browser from "./Export_browser.js"

//to import file from different module
//import {click} from "./exp_file.js"
//import {type, getText} from "./exp_file.js"

//console.log(fn.click());

let browser = new Browser();
console.log(browser.getTitle());