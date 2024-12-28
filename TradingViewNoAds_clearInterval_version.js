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

    /**
     *
     * @param {string} message - The message printed in the console.
     * @param {string} fontColor - The font color of the message printed in the console.
     * @param {string} backgroundColor - The background color of the message printed in the console.
     */
    /*function consolePrintLine(message, fontColor, backgroundColor) {
       console.log(`%c${message}`, `background: ${backgroundColor}; ` +
                                   `color: ${fontColor}; ` +
                                   `font-weight: bold`)
    }

    consolePrintLine('Web page fully loaded', 'black', 'purple')

    let logCounter = 0
    */

    let intervalID = setInterval(function() {
        //consolePrintLine(`logCounter = ${++logCounter}`, 'black', 'white')

        const adBox = document.querySelector('iframe[title="3rd party ad content"]')
        if(adBox){
            adBox.remove()
            //consolePrintLine('adBox removed', 'black', 'blue')
            clearInterval(intervalID)
        }/*else{
            consolePrintLine('No adBox for the moment', 'black', 'yellow')
        }*/
    }, 1000)

})
