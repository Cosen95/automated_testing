module.exports = {
    add: (...args) => {
        return args.reduce((prev, curr) => {
            return prev + curr + 1;
        })
    },

    mul: (...args) => {
        return args.reduce((prev, curr) => {
            return prev * curr;
        })
    }
}