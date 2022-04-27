// Copyright (c) 2022 Nathan Araujo All rights reserved
//
// Created by: Nathan Araujo
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates how much calories a person will lose doing a certain activity
 */
function cardio () {

  // input
  const weight = parseInt(document.getElementById('weight').value)

	//declare constants
	const RUNNING30 = 1.91558442
	const RUNNING60 = 3.83116883
	const HIKING30 = 1.2012987
	const HIKING60 = 2.4025974
	const SWIMMING30 = 1.65584416
	const SWIMMING60 = 3.31168831

	//process
	let run30 = (weight * RUNNING30)
	let run60 = (weight * RUNNING60)
	let hike30 = (weight * HIKING30)
	let hike60 = (weight * HIKING60)
	let swim30 = (weight * SWIMMING30)
	let swim60 = (weight * SWIMMING60)
	
	//process
	if(document.getElementById('option-1').checked) {   
    document.getElementById("display").innerHTML   
        = "You would lose around " + run30.toFixed(2) + " calories for 30 minutes of this activity and you would lose around " + run60.toFixed(2) + " calories for 1 hour of this activity";   
            }   
            else if(document.getElementById('option-2').checked) {   
                document.getElementById("display").innerHTML   
                    = "You would lose around " + hike30.toFixed(2) + " calories for 30 minutes of this activity and you would lose around " + hike60.toFixed(2) + " calories for 1 hour of this activity";     
            }   
            else if(document.getElementById('option-3').checked) {   
                document.getElementById("display").innerHTML   
                    = " You would lose around " + swim30.toFixed(2) + " calories for 30 minutes of this activity and you would lose around " + swim60.toFixed(2) + " calories for 1 hour of this activity";     
            }
}
