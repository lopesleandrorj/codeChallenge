import readline from 'readline';

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export async function submitQuestion (question) {
    return new Promise(resolve => {
        reader.question(question, (userInput) => {
            resolve(userInput)
        })
    })
}