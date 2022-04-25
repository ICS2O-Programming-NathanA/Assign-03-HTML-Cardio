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
	const
	
	//process
	let benchpress = (weight * 2)
	
  // output
  document.getElementById('60mins').innerHTML = 'You should bench press around: ' + benchpress.toFixed(2) + 'lbs'
}
