"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysys = void 0;
var MatchResult_1 = require("../MatchResult");
var WinsAnalysys = /** @class */ (function () {
    function WinsAnalysys(team) {
        this.team = team;
    }
    WinsAnalysys.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return "Team " + this.team + " won " + wins + " games.";
    };
    return WinsAnalysys;
}());
exports.WinsAnalysys = WinsAnalysys;
