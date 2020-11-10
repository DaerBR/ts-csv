"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarchReader = void 0;
var utils_1 = require("./utils");
var MarchReader = /** @class */ (function () {
    function MarchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MarchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    };
    return MarchReader;
}());
exports.MarchReader = MarchReader;
