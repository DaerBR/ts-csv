export const dateStringToDate = (dateString: string ): Date => {
    const dateSplitted = dateString
        .split('/')
        .map((value: string): number => {
            return parseInt(value);
    });
    return new Date(dateSplitted[2], dateSplitted[1] - 1, dateSplitted[0]);
}