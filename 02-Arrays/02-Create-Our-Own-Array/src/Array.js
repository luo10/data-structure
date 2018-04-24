/*
 * @Author: luo1o1o1o
 * @Date: 2018-04-23 13:32:28
 * @Last Modified by: luo1o1o1o
 * @Last Modified time: 2018-04-24 10:57:05
 */
var mArray = /** @class */ (function () {
    function mArray() {
    }
    // 构造函数
    mArray.prototype.mArray = function (n) {
        this.data = new Array(n);
        this.size = 0;
    };
    // 初始化数组
    mArray.prototype.cArray = function () {
        this.mArray(10);
    };
    // 获取数组中的元素个数
    mArray.prototype.getSize = function () {
        return this.size;
    };
    // 获取数组容量
    mArray.prototype.getCapacity = function () {
        return this.data.length;
    };
    return mArray;
}());
new mArray().cArray();
