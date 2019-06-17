const enhancer = require('./enhancer.js');
const { repair, succeed, fail } = require('./enhancer.js');


describe('enhancer', () => {
    describe('repair()', () => {
        it('should restore durability to 100', () => {
            const actual_repair = enhancer.repair({
                name: 'item',
                durability: 50,
                enhancement: 20
            });
            const actual_repair2 = enhancer.repair({
                name: 'item',
                durability: 0,
                enhancement: 10
            })

            expect(actual_repair.durability).toBe(100);
            expect(actual_repair2.durability).toBe(100);
            expect(repair({ durability: 89 }).durability).toBe(100);
        });
    });
    describe('succeed()', () => {
        it('should increase enhancement by 1, unless was already 20', () => {
            const actual_succeed = enhancer.succeed({
                name: 'item',
                durability: 100,
                enhancement: 20
            });

            const actual_succeed2 = enhancer.succeed({
                name: 'item',
                durability: 100,
                enhancement: 10
            });

            expect(actual_succeed.enhancement).toBe(20);
            expect(actual_succeed2.enhancement).toBe(11);
            expect(succeed({ enhancement: 14 }).enhancement).toBe(15)
            expect(succeed({ enhancement: 17 }).enhancement).toBe(18)
        });
    });

    describe('fail()', ()=>{
        it('should decrease the enhancement and durability', () =>{
            const expected_fail1 = {
                name:'item',
                durability: 90,
                enhancement: 15
            }
            const actual_fail1 = enhancer.fail({
                name:'item',
                durability:100,
                enhancement:15
            })
            expect(actual_fail1).toStrictEqual(expected_fail1)

            const expected_fail2 = {
                name :'item',
                durability: 0,
                enhancement: 14
            }
            const actual_fail2 = enhancer.fail({
                name: 'item',
                durability: 4,
                enhancement: 14
            })
            expect(actual_fail2).toStrictEqual(expected_fail2)

            const expected_fail3 = {
                name: 'item',
                durability: 90,
                enhancement: 15                
            }
            const actual_fail3 = enhancer.fail({
                name: 'item',
                durability: 100,
                enhancement: 15
            })
            expect(actual_fail3).toEqual(expected_fail3);

            const expected_fail4 = {
                name: 'item',
                durability: 0,
                enhancement: 16
            }
            const actual_fail4 = enhancer.fail({
                name: 'item',
                durability: 8,
                enhancement: 16
            })
            expect(actual_fail4).toEqual(expected_fail4);

            const expected_fail5 = {
                name: 'item',
                durability: 50,
                enhancement: 18 
            }
            const actual_fail5 = enhancer.fail({
                name: 'item',
                durability: 60,
                enhancement: 19
            })
            expect(actual_fail5).toEqual(expected_fail5);

            const expected_fail6 = {
                name: 'item',
                durability: 0,
                enhancement: 19  
            }
            const actual_fail6 = enhancer.fail({
                name: 'item',
                durability: 6,
                enhancement: 20
            })
            expect(actual_fail6).toEqual(expected_fail6);


        })
    })





})


