function add(a, b) {
    return a + b;
}

let memory = {};

const memorize = (add) => {
    return (...args) => {
        args.sort();
        if (memory[args] !== undefined) {
            console.log(memory[args]);
        } else {
            let sum = 0;
            for (let i = 0; i < args.length; i++) {
                sum = add(sum, args[i]);
            }
            console.log(sum);
            memory[args] = sum;
        }
    }
}


const memorizeAdd = memorize(add);
memorizeAdd(100, 200);
memorizeAdd(100, 300);

memorizeAdd(100, 200);
memorizeAdd(200, 100);


