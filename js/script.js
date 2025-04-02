// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.htm
"use strict";

function hoursWorked() {
    const TAX = 20.05;
    let hoursWorked = parseFloat(document.getElementById('hours-worked').value)
    let hourlyRate = parseFloat(document.getElementById('hourly-rate').value)
    let gross = hoursWorked * hourlyRate;
    let govPay = gross * TAX / 100;
    let net = gross - govPay;

    document.getElementById('gross-pay').innerHTML = "Your Gross Pay is " + gross.toFixed(2) + "$";
    document.getElementById('net-pay').innerHTML = "Your Net Pay is " + net.toFixed(2) + "$";
    document.getElementById('gov-pay').innerHTML = "The Government takes " + govPay.toFixed(2) + "$";

}