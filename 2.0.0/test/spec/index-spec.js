KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('kcopy', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/kcopy/2.0.0/']});