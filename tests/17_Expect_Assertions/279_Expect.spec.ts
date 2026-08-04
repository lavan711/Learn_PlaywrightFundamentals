import { test, expect} from '@playwright/test';

test.describe('Expected Assertions', ()=>{

    test('Verfication', async({page})=> {
        // page fixture, we will inject the page directly into the test fixture, before running the test
        //BrowserContext, Browser, Page was created. 
        //fixture is a pre-defined object which is available in the test. 
        // what is the use of this page fixture? we can use this page fixture to perform any action on the page.
        

        // BCP Automaitically done - page fixtuer which you can use automatically


            expect(1+2).toBe(3);
            // expect(actual).toBe(expected)
            let ac = false;
            expect(ac).toBeFalsy();
            expect(true).toBeTruthy();
             expect(null).toBeNull();
             expect(34).toBeGreaterThan(11);
             expect([1, 2, 3]).toEqual([1, 2, 3]);
             expect({ role: 'admin' }).toEqual({ role: 'admin' });
             expect({ age: 20, role: 'admin' }).toEqual({ role: 'admin', age: 20 });

    });

});

