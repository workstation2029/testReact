


async function doSomething() {
    console.log('Привет!');
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Пока!');

    // const data = await fetch('').then(r => r.json());
}

export default doSomething;
