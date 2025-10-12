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

    constructor(nameOrOptions = 'unnamed', initialCount = 0, intervalMs = 1000) {
        if (typeof nameOrOptions === 'object' && nameOrOptions !== null) {
            const { name = 'unnamed', initialCount: ic = 0, intervalMs: im = 1000 } = nameOrOptions;
            super(name, ic);
            this.intervalMs = Number.isFinite(im) ? im : 1000;
        } else {
            super(nameOrOptions, initialCount);
            this.intervalMs = Number.isFinite(intervalMs) ? intervalMs : 1000;
        }

        this.timerId = null;
    }

    start() {
        if (this.timerId !== null) return this.timerId;

        this.timerId = setInterval(() => {
            // use the inherited inc method so behavior is consistent
            this.inc(1);
            console.log(`Counter "${this.name}" incremented to ${this.count}`);
        }, this.intervalMs);

        return this.timerId;
    }

    stop() {
        if (this.timerId === null) return false;
        clearInterval(this.timerId);
        this.timerId = null;
        return true;
    }

    isRunning() {
        return this.timerId !== null;
    }
}

const t = new TimedCounter('t', 0, 200)

console.log(t.start())