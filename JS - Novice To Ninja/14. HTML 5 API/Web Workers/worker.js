let i =  0;
function count() {
    i++;
    // SEND MESSAGE TO PARENT
    self.postMessage(i);
}

setInterval(count, 100);