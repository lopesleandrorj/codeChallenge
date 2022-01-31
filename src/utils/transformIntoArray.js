export async function transformIntoArray(str, array = []) {
    await str.split(" ").forEach(char => { array.push(char) })

    return array
}