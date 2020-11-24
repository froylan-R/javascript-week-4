const find = function(num, arr) {
    if (arr.includes(num)) {
       console.log(`Index #${arr.indexOf(num)}`);
    }
    else {
        return -1;
    }
return num;
}

console.log(find(3, [0, 0, 3, 0]));