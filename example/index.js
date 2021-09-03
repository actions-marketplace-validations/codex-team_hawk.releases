/**
 * Define input vars for the action
 */
const INPUT_VARS = {
    release: 'hello-2.2',
    token: 'eyJpbnRlZ3JhdGlvbklkIjoiMWI2MzNhNzAtZmE4OS00NzlhLWI5ODAtYzVkMjdkYTFkYTZkIiwic2VjcmV0IjoiZGI5MTU3MTctZjBkNS00YzVjLTg3YzUtMTEwYWY1NmRiMTYxIn0='
}

/**
 * Apply vars to environment
 */
Object.keys(INPUT_VARS).forEach(key => {
    const keyName = `INPUT_${key.replace(/ /g, '_').toUpperCase()}`;

    process.env[keyName] = INPUT_VARS[key];
})

/**
 * Run action
 */
require('../dist/index');
