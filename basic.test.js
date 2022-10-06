const mathOperations = require('./calculator');
const getFirstAlbumTitle = require('./index');
const axios = require('axios');
axios.get = jest.fn();

describe("Calculator tests", () => {
    test('adding 1+2 returns 3', () => {
        expect(mathOperations.sum(1,2)).toBe(3);
    });
})

//jest matchers
describe("Calculator with jest matchers", () => {
    //equality
    test("equality matchers", () => {
        expect(2*2).toBe(4);
        expect(4-2).not.toBe(1);
    })

    //truthiness
    test("truthy operators", () => {
        var name="Software testing help"
        var n = null
        expect(n).toBeNull()
        expect(name).not.toBeNull
      
        // name has a valid value
        expect(name).toBeTruthy()
        // pass - null treated as false or negative
        expect(n).toBeFalsy()
        // 0 - treated as false
        expect(0).toBeFalsy()
    })     

    //number matchers
    test("numeric operators", () => {
 
        var num1 = 100;
        var num2 = -20;
        var num3 = 0;
      
        // greater than
        expect(num1).toBeGreaterThan(10)
      
        // less than or equal
        expect(num2).toBeLessThanOrEqual(0)
      
        // greater than or equal
        expect(num3).toBeGreaterThanOrEqual(0)
      })

    //string matchers
    test("string matchers",() => {
        var string1 = "software testing help - a great resource for testers"
      
        // test for success match
        expect(string1).toMatch(/test/);
      
        // test for failure match
        expect(string1).not.toMatch(/abc/)
      })
})

xdescribe("Without mock", () => {
    it('returns the title of the first album', async () => {
        const title = await getFirstAlbumTitle();  // Run the function
        expect(title).toEqual('quidem molestiae enim');  // Make an assertion on the result
      });
})

describe("mocking response", () => {

it('returns the title of the first album', async () => {
    axios.get.mockResolvedValue({
        data: [
        {
            userId: 1,
            id: 1,
            title: 'My First Album'
        },
        {
            userId: 1,
            id: 2,
            title: 'Album: The Sequel'
        }
        ]
    });

    const title = await getFirstAlbumTitle();
    expect(title).toEqual('My First Album');
    })
})