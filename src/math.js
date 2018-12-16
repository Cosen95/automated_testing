min = (a,b) => {
    return (b - a) * 3;
}

module.exports = {
    add: (...args) => {
        return args.reduce((prev, curr) => {
            return prev + curr;
        })
    },

    mul: (...args) => {
        return args.reduce((prev, curr) => {
            return prev * curr;
        })
    },

    cover: (a, b) => {
        if (a > b) {
            return a - b
        } else if (a == b) {
            return a + b
        } else {
            return min(a, b)
        }
    }
}