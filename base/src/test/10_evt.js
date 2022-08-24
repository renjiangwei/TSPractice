function EventBus () {
  this._events = {}
}



EventBus.prototype.on = function (name, fn) {
    if (!this._events[name]){
        this._events[name] = [fn]
    } else {
        this._events[name].push(fn)
    }
}

EventBus.prototype.emit = function (name, data) {
    if(this._events[name]) {
        this._events[name].forEach(fn => {
            fn(data)
        });
    }
    
}


let eventBus = new EventBus()
eventBus.on('name1', function(a) {
    console.log(a)
})
eventBus.on('name1', function(a) {
  console.log(a + '1')
})
eventBus.emit('name1', '123')