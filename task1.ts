function optimizeBookings(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    const result: number[][] = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const lastInterval = result[result.length - 1];
        if (lastInterval[1] >= intervals[i][0]) {
            lastInterval[1] = Math.max(lastInterval[1], intervals[i][1]);
        } else {
            result.push(intervals[i]);
        }
    }

    return result;
}

// Main function to take input and print output
function main() {
    // Sample input: you can replace this with any 2D array of intervals
    const intervals: number[][] = [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18]
    ];

    // Call the optimizeBookings function with the input
    const optimizedIntervals = optimizeBookings(intervals);

    // Print the output
    console.log("Optimized intervals:", optimizedIntervals);
}

// Call the main function
main();
