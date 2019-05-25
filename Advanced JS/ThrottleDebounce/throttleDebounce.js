
https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf
// SIMPLE THROTTLE 

export function throttle(func, delay) {
    let lastRan;
    let lastFunc;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, arguments);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now - lastRan) >= delay) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, delay - (Date.now() - lastRan));
        }
    }
}

// SIMPLE DEBOUNCE 

export function debounce(func, limit) {
    let inDebounce;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), limit);
    }
}