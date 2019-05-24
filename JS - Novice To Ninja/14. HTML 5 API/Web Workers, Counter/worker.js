let i =  0;
function count() {
    i++;
    // SEND MESSAGE TO PARENT
    self.postMessage(i);
    if (i == 100) {
        // WHEN VALUE REACHES 100 TERMINATE YOUR SELF
        self.close();
        self = undefined;
    }
}

setInterval(count, 100);