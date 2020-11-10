"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    var dateSplitted = dateString
        .split('/')
        .map(function (value) {
        return parseInt(value);
    });
    return new Date(dateSplitted[2], dateSplitted[1] - 1, dateSplitted[0]);
};
