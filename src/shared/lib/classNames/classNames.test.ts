import {classNames} from "./classNames";

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass')
    })

    test('with additional class', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('with mods', () => {
        const expected = 'someClass hover active class1 class2'
        expect(classNames('someClass', {hover: true, scroll: false, active: true}, ['class1', 'class2'])).toBe(expected)
    })
})
