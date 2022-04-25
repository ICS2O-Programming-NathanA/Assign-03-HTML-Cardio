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
	let output = (weight * RUNNING30)
	
  // output
  document.getElementById('60mins').innerHTML = 'You should bench press around: ' + output.toFixed(2) + 'lbs'
}
