function filterArray(numbers, value) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            result.push(numbers[i]);
        }
    }
    return result;
}