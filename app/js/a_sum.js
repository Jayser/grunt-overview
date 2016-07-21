(function (win, doc) {
    win.sum = function () {
        return [].slice.apply(arguments).reduce(function (prev, curr) {
            return prev + parseInt(curr);
        }, 0)
    };
}(window, document));