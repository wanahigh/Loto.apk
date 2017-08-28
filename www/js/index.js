/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var i =0;
if(i <=6)
{

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(0);
        max = Math.floor(45);
        i++;
        return Math.floor(Math.random() * (max - min +1)) + min;

    }
}

else {
    alert("jouer comporte des risque")
}

document.getElementById("bouton").addEventListener("click", function(){
    document.getElementById("inject").innerHTML= getRandomIntInclusive();



});

document.getElementById("bouton").addEventListener("click", function(){
    document.getElementById("inject2").innerHTML= getRandomIntInclusive();


});

document.getElementById("bouton").addEventListener("click", function(){
    document.getElementById("inject3").innerHTML= getRandomIntInclusive();


});

document.getElementById("bouton").addEventListener("click", function(){
    document.getElementById("inject4").innerHTML= getRandomIntInclusive();


});

document.getElementById("bouton").addEventListener("click", function(){
    document.getElementById("inject5").innerHTML= getRandomIntInclusive();


});

document.getElementById("bouton").addEventListener("click", function(){
    document.getElementById("inject6").innerHTML= getRandomIntInclusive();


});
document.getElementById("bouton").addEventListener("click", function(){
    document.getElementById("inject7").innerHTML= getRandomIntInclusive();


});
var localStorage = window.localStorage;
//Init local storage js
app.initialize();










function sEt() {
    var var1 = document.getElementById("inject").innerHTML;
    localStorage.setItem('numero1',var1);// nom, valeur du localstorage


    var var2 = document.getElementById("inject2").innerHTML;
    localStorage.setItem('numero2',var2);// nom, valeur du localstorage


    var var3 = document.getElementById("inject3").innerHTML;
    localStorage.setItem('numero3',var3);// nom, valeur du localstorage

    var var4 = document.getElementById("inject4").innerHTML;
    localStorage.setItem('numero4',var4);// nom, valeur du localstorage


    var var5 = document.getElementById("inject5").innerHTML;
    localStorage.setItem('numero5',var5);// nom, valeur du localstorage


    var var6 = document.getElementById("inject6").innerHTML;
    localStorage.setItem('numero6',var6);// nom, valeur du localstorage




}

function gEt() {
    var7 = localStorage.getItem("numero1", "");


    var8 = localStorage.getItem("numero2", "");


    var9 = localStorage.getItem("numero3", "");


    var10 = localStorage.getItem("numero4", "");


    var11 = localStorage.getItem("numero5", "");


    var12 = localStorage.getItem("numero6", "");


    var tableau = new Array(var7,var9,var10,var11,var12);

    var tab1 = tableau[0];
    var tab2 = tableau[1];
    var tab3 = tableau[2];
    var tab4 = tableau[3];
    var tab5 = tableau[4];
    var tab6 = tableau[5];

    console.log(tableau)

    $('span').html(var7,var8,var9,var10,var11);


}

