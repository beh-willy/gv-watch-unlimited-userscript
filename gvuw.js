// ==UserScript==
// @name 破解同志成人動作片🔞觀看限制
// @version 1.0.0
// @author Lucas
// @description 通过 JavaScript 移除观看次数，用于破解部分同志網站（GV）觀看次數的限制
// @homepage https://greasyfork.org/zh-CN/scripts/458399
// @supportURL https://github.com/beh-willy/gv-watch-unlimited-userscript/issues
// @match *://\?*tong\?*.*/*
// @match *://\?*tong.*/*
// @match *://gtv\?*.*/*
// @match *://gv\?*.*/*
// @match *://\?*\gv\?*.*/*
// @match *://gay\?*.*/*
// @match *://sex\?*.*/*
// @match *://www.sex\?*.*/*
// @name:en gv-watch-unlimited-userscript
// @license GPLv3
// @icon https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbG9CP00gpzyYZFnlMrnWVxbVk5OTQFx-1MA&usqp=CAU
// @namespace com.younision.gvuw
// @homepageURL https://greasyfork.org/en/scripts/458399
// @contributionURL https://younision.com
// @description:en Remove certain restriction on adult movie websites, for unlimited watch GV
// @compatible mobile Stay
// @compatible firefox Violentmonkey
// @compatible firefox Tampermonkey
// @compatible chrome Violentmonkey
// @compatible chrome Tampermonkey
// @compatible edge Violentmonkey
// @compatible edge Tampermonkey
// @grant none
// ==/UserScript==

(function () {
    'use strict';
    window.localStorage.setItem('free_plays', '99999');
})();
