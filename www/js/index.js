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

var i =0
if(i <=6)
{

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(0);
        max = Math.floor(45);
        i++
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
    localStorage.setItem.numero1.innerHTML.valueOf();
    localStorage.setItem.numero2.innerHTML.valueOf();
    localStorage.setItem.numero3.innerHTML.valueOf();
    localStorage.setItem.numero4.innerHTML.valueOf();
    localStorage.setItem.numero5.innerHTML.valueOf();
    localStorage.setItem.numero6.innerHTML.valueOf();
    localStorage.setItem.numero7.innerHTML.valueOf();
};


function btn(){
    document.getElementById("localS").addEventListener("click", showLocalStorage);

    localStorage._showElement();

}