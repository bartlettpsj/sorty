'strict';

const a = [1,2,3,5,4,7,8,0];

const sort = (l) => {
    const size = l.length;
    var sorted = false;
    while (!sorted) {
        sorted = true;
        for (var i=0; i < size-1; i++) {
            if (l[i] < l[i+1]) {
                [l[i], l[i+1]] = [l[i+1], l[i]];
                sorted = false;
            }
        }
    }

    return l;
}

console.log(sort(a));