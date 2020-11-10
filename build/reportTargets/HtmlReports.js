"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReports = void 0;
var fs_1 = __importDefault(require("fs"));
var HtmlReports = /** @class */ (function () {
    function HtmlReports() {
    }
    HtmlReports.prototype.print = function (report) {
        var html = "<div><h1>Analysys output</h1><div>" + report + "</div></div>";
        fs_1.default.writeFileSync('report.html', html);
    };
    return HtmlReports;
}());
exports.HtmlReports = HtmlReports;
