const app = require('./app');

describe('Testing App', function () {
    it('should add numbers', function () {
       expect(app.add(2, 2)).toBe(4);
    });

    it('should add numbers', function () {
        expect(app.add(2, 2)).not.toBe(5);
     });

     it('should be null', function () {
        expect(app.isNull()).toBeNull();
     });

     it('should be falsy', function () {
        expect(app.checkValue(undefined)).toBeFalsy();
     });

     it('should be John Doe user', function () {
        expect(app.createUser()).toEqual({
            firstName: 'John',
            lastName: 'Doe',
        });
     });

     it('should be under 1600', function () {
        const load1 = 800;
        const load2 = 800;
        expect(load1 + load2).toBeLessThanOrEqual(1600);
     });

     it('should be there no I in team', function () {
        expect('team').not.toMatch(/I/i);
     });

     it('should there be admin in usernames', function () {
         const userNames = ['john', 'admin', 'doe'];
         expect(userNames).toContain('admin');
     });

     it('should be Leanne Graham', async function () {
         expect.assertions(1);
         const data = await app.fetchUser();
         expect(data.name).toEqual('Leanne Graham');
      });
});

/**
 * Check for truthy and falsy values
 *  toBeNull
 *  toBeUndefined
 *  toBeTruthy
 *  toBeFalsy
 * 
 * Check for object or array
 */