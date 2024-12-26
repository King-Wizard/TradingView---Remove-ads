// ==UserScript==
// @name         TradingView - Remove ads - clearIntervalVersion
// @version      1.0
// @description  Does what it says.
// @author       King Wizard
// @icon         https://i.ibb.co/3pdHtQg/trading-view-icon.png
// @include      https://www.tradingview.com/chart/*
// @grant        none
// @namespace    KingWizardNamespace
// ==/UserScript==

// https://play-lh.googleusercontent.com/OoPpCoMOpPra6k0Qlwhfi14vOmqHfR790C1C7a_sHNqqUUYJhTYy6rjAmrv4eMLQRDbJ=s94-rw

window.addEventListener('load', function clearIntervalVersion() {
    'use strict'

    //console.log('%cPage fully loaded', 'background: purple; color: black; font-weight: bold')

    //let logCounter = 0

    let intervalID = setInterval(function() {
        //console.log('%clogCounter = ' + ++logCounter, 'background: white; color: black; font-weight: bold');

        const adBox = document.querySelector('iframe[title="3rd party ad content"]')
        if(adBox){
            adBox.remove()
            //console.log('%cadBox removed', 'background: blue; color: black; font-weight: bold')
            clearInterval(intervalID)
        }/*else{
            console.log('%cNo adBox for the moment', 'background: yellow; color: black; font-weight: bold')
        }*/
    }, 1000)

})