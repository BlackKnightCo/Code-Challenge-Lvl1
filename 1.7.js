var array1 = ["a", "b", "c", "d"],
    array2 = [1, 2],
    result = [],
    i, l = Math.min(array1.length, array2.length);
    
for (i = 0; i < l; i++) {
    result.push(array1[i], array2[i]);
}
result.push(...array1.slice(l), ...array2.slice(l));

console.log(result);