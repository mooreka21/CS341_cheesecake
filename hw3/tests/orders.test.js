const orders = require('../routes/orders.js');
    test('checks arr[0] is topping=cherry, quantity=2', () => {
        expect(orders.length).toEqual(3);
    });
