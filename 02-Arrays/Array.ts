/*
 * @Author: luo1o1o1o 
 * @Date: 2018-04-24 11:10:04 
 * @Last Modified by: luo1o1o1o
 * @Last Modified time: 2018-04-25 15:45:52
 */
class mArray<E> {
  private data: E[]
  private size: number
  // 构造函数
  public constructor(capacity: number = 10) {
    this.data = new Array(capacity)
    this.size = 0
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
  // 想所有元素后添加一个新元素
  public addLast(e: E) {
    this.add(this.size, e)
  }
  // 在所有元素后添加一个新元素
  public addFirst(e: E) {
    this.add(0, e)
  }
  // 在第index个位置插入一个新元素e
  public add(index: number, e: E) {
    if (index < 0 || index > this.size) {
      throw 'Add failed. Require index >= 0 and index <= size.'
    }
    if (this.size == this.data.length) {
      this.resize(2 * this.data.length)
    }
    for (let i: number = this.size - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i]
    }
    this.data[index] = e
    this.size++
  }
  // 获取index索引位置的元素
  public get(index: number): E {
    if (index < 0 || index >= this.size)
      throw 'Get failed. Index is illegal.'
    return this.data[index]
  }

  // 修改index索引位置的元素为e
  public set(index: number, e: E): void {
    if (index < 0 || index >= this.size)
      throw 'Get failed. Index is illegal.'
    this.data[index] = e
  }

  // 查找数组中是否有元素e
  public contains(e: E): boolean {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] == e) {
        return true
      }
    }
    return false
  }

  // 查找数组元素中e所载的索引，如果不存在元素e，则返回-1
  public find(e: E): number {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] == e) {
        return i
      }
    }
    return -1
  }
  // 从数组中删除index位置的元素，返回删除的元素
  public remove(index: number): E {
    if (index < 0 || index >= this.size)
      throw 'Remove failed. Index is illegal.'
    let ret: E = this.data[index]
    for (let i = index + 1; i < this.size; i++) {
      this.data[i - 1] = this.data[i]
    }
    this.size--
    this.data[this.size] = null
    return ret
  }

  // 从数组中删除第一个元素, 返回删除的元素
  public removeFirst(): E {
    return this.remove(0)
  }
  // 从数组中删除最后一个元素, 返回删除的元素
  public removeLast(): E {
    return this.remove(this.size - 1)
  }
  // 从数组中删除元素e
  public removeElement(e: E): void {
    let index: number = this.find(e)
    if (index != -1) {
      this.remove(index)
    }
  }
  // 转换
  public toString(): string {
    let res = `Array: size = ${this.size} , capacity = ${this.data.length}\n`
    res += '['
    for (let i = 0; i < this.size; i++) {
      res += this.data[i]
      if (i != this.size - 1)
        res += ','
    }
    res += ']'
    console.log(res)
    return res
  }

  // 扩容
  private resize(newCapacity: number): void {
    let newData: E[] = new Array(newCapacity)
    for (let i: number; i < this.size; i++) {
      newData[i] = this.data[i]
    }
    this.data = newData
  }
}

