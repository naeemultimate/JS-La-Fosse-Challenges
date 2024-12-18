const  { raffleWinners, orderFood } = require('../harderChallenges/harderChallenges.js')

describe('raffleWinners', () => {
    test('should return correct winners for basic example with multiple winners', () => {
        const result = raffleWinners([2, 15, 7, 21]);
        expect(result).toEqual([
            { seat: 1, raffleTicket: 15 },
            { seat: 3, raffleTicket: 21 }
        ]);
    });

    test('should return correct winners for a case with more numbers and multiple winners', () => {
        const result = raffleWinners([5, 39, 16, 27, 4, 11]);
        expect(result).toEqual([
            { seat: 1, raffleTicket: 39 },
            { seat: 3, raffleTicket: 27 },
            { seat: 5, raffleTicket: 11 }
        ]);
    });

    test('should return an empty array when there are no winners', () => {
        const result = raffleWinners([9, 4, 13, 22, 37, 26]);
        expect(result).toEqual([]);
    });

    test('should return an empty array when all numbers are even', () => {
        const result = raffleWinners([2, 4, 6, 8, 10, 12]);
        expect(result).toEqual([]);
    });

    test('should return an empty array for a single-element array where the ticket and seat number are odd', () => {
        const result = raffleWinners([5]);
        expect(result).toEqual([]);
    });

    test('should return an empty array for a single-element array where the ticket is even', () => {
        const result = raffleWinners([4]);
        expect(result).toEqual([]);
    });

    test('should return an empty array for an array with large even numbers', () => {
        const result = raffleWinners([999999, 888888, 777777, 666666]);
        expect(result).toEqual([]);
    });

    test('should correctly handle a mixed case where only some values match the criteria', () => {
        const result = raffleWinners([3, 17, 8, 25, 2, 33]);
        expect(result).toEqual([
            { seat: 1, raffleTicket: 17 },
            { seat: 3, raffleTicket: 25 },
            { seat: 5, raffleTicket: 33 }
        ]);
    });
});


describe('orderFood', () => {
    test('should calculate total cost for a basic food order', () => {
        const result = orderFood({ brownies: 2, cupCakes: 7 }, 3);
        expect(result).toBe(27);
    });

    test('should calculate total cost for a larger order with multiple items and guests', () => {
        const result = orderFood({ crispPackets: 8, apples: 4, iceCream: 3, chocolateBars: 10 }, 20);
        expect(result).toBe(500);
    });

    test('should return 0 if there are no food items', () => {
        const result = orderFood({}, 5);
        expect(result).toBe(0);
    });

    test('should return 0 if there are no guests', () => {
        const result = orderFood({ brownies: 2, cupCakes: 7 }, 0);
        expect(result).toBe(0);
    });

    test('should handle cases with one guest and one food item', () => {
        const result = orderFood({ pizza: 10 }, 1);
        expect(result).toBe(10);
    });

    test('should handle cases with one guest and multiple food items', () => {
        const result = orderFood({ soda: 3, chips: 2, candy: 1 }, 1);
        expect(result).toBe(6);
    });

    test('should handle cases with multiple guests and no food items', () => {
        const result = orderFood({}, 10);
        expect(result).toBe(0);
    });
});