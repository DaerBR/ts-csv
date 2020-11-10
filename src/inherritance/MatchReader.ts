import {dateStringToDate} from "./utils";
import {MatchResult} from "./MatchResult";



interface DateReader {
    read(): void;
    data: string[][]
}

export class MatchReader {
    matches: MatchData[] = [];

    constructor(public reader: DateReader) {}

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map(
            (row: string[]): MatchData => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6]
                ];
            }
        );
    }

}