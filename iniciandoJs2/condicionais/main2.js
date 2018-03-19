console.log('Hello from external script');

// condição
var i = 0;
while (i < 10) {
    console.log(i),
        i++;
}

// declaração
for (var a = 0; a < 10; a++) {
    console.log(a);
}

[0, 1, 2, 3, 4, 5, 6].forEach(function (value, key) {
    console.log(value, key);
});