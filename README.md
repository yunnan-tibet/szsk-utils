# szsk前端公共函数库
    + 各种类型下的工具方法，目前最常用是对树形结构的方法

## 使用范围
通用

## 使用方式
npm i @szsk/utils

import { funcUtils } from '@szsk/utils';

ts使用
```
  // tsconfig.json
  "compilerOptions": {
    "typeRoots": [
      // 加入这个进行自动提示
      "node_modules/@szsk",
    ]
  },
```

## 已有工具类型
### tree
```
/**
 * 后端返回的字段可能和前端需要不符的情况下，用来改变树形结构的key
 * @param {tree[]} list 树形列表
 * @param {Array<[string, string, Function?]>} changeKeys Array<[原始key, 最终key, changeFunc(item[原始key], item)]>
 * @param {string} childrenKey children属性key，默认为children
 * @returns {tree[]}
 */
export const changeTreePropName = (list: any[], changeKeys: Array<[string, string, Function?]>, childrenKey?: string)

/**
 * 把线性数据转成树形数据
 * @param {any[]} source 原数据List
 * @param {string} id id的key
 * @param {string} parentId parentId的key 
 * @param {string} children children的key
 * @param {string} topCode 顶级元素父元素的id
 * @returns {tree[]} 树形数组
 */
export function setTreeData(source: any[], id: string, parentId: string, children: string, topCode?: string)

/**
 * 根据指定key从主树获取子树，浅拷贝
 * @param {treeObj} tree obj类型
 * @param {string} key 可以是key.key类型
 * @param {any} value 值
 * @param {string} childrenKey children属性key，默认为children
 * @returns {treeObj}
 */
export const findSingle = (tree: any, key: string, value: any, childrenKey?: string)

/**
 * 根据key从主树list获取子树
 * @param {string} key 
 * @param {tree[]} treeList list类型
 * @param {string} value 
 * @param {string} childrenKey children属性key，默认为children
 * @returns {treeObj}
 */
export const getMyTreeListById = (key: string, treeList: any[], value: string, childrenKey?: string)

/**
 * 根据key从主树获取子树的所有key值列表
 * @param {string} key 
 * @param {tree[]} treeList 
 * @param {string} value 
 * @param {string} childrenKey children属性key，默认为children
 * @returns {string[]} key值数组
 */
export const getTreeIdsById = (key: string, treeList: any[], value: string, childrenKey?: string)

/**
 * 扁平化树形
 * @param {tree[]} list tree数组
 * @param {string} childrenKey children属性key，默认为children
 * @returns {any[]} 
 */
export function getPeerList(list: any[], childrenKey?: string)

/**
 * 根据字符串筛选tree，底下有的会保存上面的
 * @param {tree[]} origin 原始tree，子集为children
 * @param {string} value 筛选字符串
 * @param {string} key 字符串对比的key
 * @param {string} childrenKey children属性key，默认为children
 * @returns {tree[]}
 */
export const filterTreeData = (
  origin: any[],
  value: string,
  key: string,
  childrenKey?: string,
)

/**
 * 根据key筛选tree，仅匹配到一个，底下有的会保存上面的line，去除底部
 * @param {tree[]} origin 原始tree，子集为children
 * @param {string} value 筛选值
 * @param {string} key 对比的key
 * @param {string} childrenKey children属性key，默认为children
 * @returns {tree[]}
 */
export const filterLine = (origin: any[], value: string, key: string, childrenKey?: string)

/**
 * 获取tree的叶子节点列表
 * @param {tree[]} treeL 原始treeList
 * @param {string} childrenKey children属性key，默认为children
 * @returns {any[]} 扁平的叶子节点数组
 */
export const getLeafs = (treeL: any[], childrenKey?: string)
```
### arr
### cookie
### url
### number
### func
### hook
### obj
### regexp
### time
### scrollBar

## 后续安排
1.工具文档开发
2.工具完善测试
3.工具拓展