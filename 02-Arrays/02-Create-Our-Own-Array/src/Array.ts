/*
 * @Author: luo1o1o1o 
 * @Date: 2018-04-23 13:32:28 
 * @Last Modified by: luo1o1o1o
 * @Last Modified time: 2018-04-24 11:03:19
 */
class mArray {
  private data: number[]
  private size: number
  // 构造函数
  public mArray(n: number) {
    this.data = new Array(n);
    this.size = 0
  }
  // 初始化数组
  public cArray() {
    this.mArray(10)
  }
  // 获取数组中的元素个数
  public getSize(): number {
    return this.size
  }
  // 获取数组容量
  public getCapacity(): number {
    return this.data.length
  }
  // 返回数组是否为空
  public isEmpty(): boolean {
    return this.size == 0
  }
}


new mArray().cArray()