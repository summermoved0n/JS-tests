class Counter {
    constructor(name = 'unnamed', initialCount = 0) {
        this.name = String(name);
        this.count = Number.isFinite(initialCount) ? initialCount : 0;
    }


    inc(n = 1) {
        const delta = Number(n) || 0;
        this.count += delta;
        return this.count;
    }

    dec(n = 1) {
        const delta = Number(n) || 0;
        this.count -= delta;
        return this.count;
    }

    reset(value = 0) {
        this.count = Number(value) || 0;
        return this.count;
    }


    getValue() {
        return this.count;
    }


    toString() {
        return `${this.constructor.name} "${this.name}": ${this.count}`;
    }
}

class TimedCounter extends Counter {    
    constructor({name, initialCount}) {
        super(name, initialCount);
        this.name = String(name);
        this.count = Number.isFinite(initialCount) ? initialCount : 0;
        this.timerId = null;
    }

    start() {
        if(this.timerId) {
            return;
        }

        const timerId = setInterval(() => {this.count += 1,
        console.log(`Counter "${this.name}" incremented to ${this.count}`);
        }, 1000);    
        return this.timerId = timerId;
    }

    stop() {   
        if(!this.timerId) {
            return this.timerId;
        }

        clearInterval(this.timerId);
        return 'stopped';
    }

    isRunning() {
        return Boolean(this.timerId);
    }
}

const c = new TimedCounter({name: 'MyTimedCounter', initialCount: 10});

console.log(c.stop());
console.log(c.isRunning());
console.log(c.start());
console.log(c.isRunning());
console.log(c.stop());
