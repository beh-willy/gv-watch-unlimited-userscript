// ==UserScript==
// @name         破解同志成人動作片🔞觀看限制
// @namespace    http://tampermonkey.net/
// @version      0.1
// @license MIT
// @description  通过 JavaScript 移除观看次数，用于破解部分同志網站（GV）觀看次數的限制
// @homepage     https://greasyfork.org/zh-CN/scripts/458410
// @supportURL   https://github.com/beh-willy/gv-watch-unlimited-userscript/issues
// @author       Lucas
// @include      /^https?://nanyan.(com|gay|top|tk|cf|ml|gq|ga|tk|info)./*
// @include      /^https?://gtv(1|2|3|4|5|6|7|8|9).(com|gay|top|tk|cf|ml|gq|ga|tk|info)./*
// @include      /^https?://weitongshipin.(com|gay|top|tk|cf|ml|gq|ga|tk|info)./*
// @include      /^https?://zhongtongshipin.(com|gay|top|tk|cf|ml|gq|ga|tk|info)./*
// @include      /^https?://langlangshipin.(com|gay|top|tk|cf|ml|gq|ga|tk|info)./*
// @include      /^https?://xiaohongshipin.(com|gay|top|tk|cf|ml|gq|ga|tk|info)./*
// @include      /^https?://danlanshipin.(com|gay|top|tk|cf|ml|gq|ga|tk|info)./*
// @include      /^https?://gv(1|2|3|4|5|6|7|8|9).(com|gay|top|tk|cf|ml|gq|ga|tk|info)./*
// @include      /^https?://nanying.(com|gay|top|tk|cf|ml|gq|ga|tk|info)./*
// @include      /^https?://xiaofen.(com|gay|top|tk|cf|ml|gq|ga|tk|info)./*
// @match        *://\?*tong\?*.*/*
// @match        *://\?*tong.*/*
// @match        *://gtv\?*.*/*
// @match        *://gv\?*.*/*
// @match        *://\?*\gv\?*.*/*
// @match        *://gay\?*.*/*
// @match        *://sex\?*.*/*
// @match        *://www.sex\?*.*/*
// @iconURL      https://11.mydrivers.com/m/images/v1/shipin_icon.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.localStorage.setItem('free_plays', '99999');
})();
