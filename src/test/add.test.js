const add = (a, b) => a + b
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('should add two number', () => {
    const result = add(3, 4)
    
    expect(result).toBe(7)
})

test('should generate greeting from name', () => {
    const result = generateGreeting('Giovanni')

    expect(result).toBe('Hello Giovanni!')
})

test('should genarate greeting for no name', () => {
    const result = generateGreeting()
    expect(result).toBe('Hello Anonymous!')
})
