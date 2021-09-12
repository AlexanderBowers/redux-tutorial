export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const update = (input) => {
    return {
        type: 'UPDATE',
        input: input
    }
}