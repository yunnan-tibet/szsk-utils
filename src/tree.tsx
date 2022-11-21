import { deepClone } from "./obj";

/**
 * 后端返回的字段可能和前端需要不符的情况下，用来改变树形结构的key
 * @param list 树形列表
 * @param changeKeys Array<[原始key, 最终key, changeFunc(item[原始key], item)]>
 */
export const changeTreePropName = (list: any[], changeKeys: Array<[string, string, Function?]>) => {
  if (!list || !list.length) {
    return [];
  }
  const cloneList = deepClone(list);
  return cloneList.map((item: any) => {
    changeKeys.forEach((keys) => {
      const changeFunc = keys[2];
      if (!changeFunc) {
        item[keys[1]] = item[keys[0]];
      } else {
        item[keys[1]] = changeFunc(item[keys[0]], item);
      }
    })
    if (item.children && item.children.length) {
      item.children = changeTreePropName(item.children, changeKeys);
    }
    return item;
  });
}

/**
 *
 * 把线性数据转成树形数据
 * @source 原数据
 * @id string
 * @parentId string
 * @children string
 * @topCode string
 */
export function setTreeData(source: any[], id: string, parentId: string, children: string, topCode?: string) {
  const cloneData = deepClone(source) || [];
  const tree = cloneData.filter((father: any) => {
    const branchArr = cloneData.filter((child: any) => father[id] === child[parentId]);
    if (branchArr.length > 0) {
      father[children] = branchArr;
    }
    return father[parentId] === (topCode || '');
  });
  return tree;
}


/**
 * 根据id从主树获取子树
 * @param key 
 * @param treeList 
 * @param id 
 */
export const getMyTreeListById = (key: string, treeList: any[], id: string) => {
  if (!treeList || !treeList.length) {
    return null;
  }
  let myTreeObj = null;

  const getTreeList = (_list: any[]) => {
    _list.forEach((item) => {
      const { children } = item;
      if (item[key] === id) {
        myTreeObj = item;
      } else if (children && children.length) {
        getTreeList(children);
      }
    })
  }
  getTreeList(treeList);
  return myTreeObj;
}

/**
 * 根据id从主树获取子树的所有id列表
 * @param key 
 * @param treeList 
 * @param id 
 */
export const getTreeIdsById = (key: string, treeList: any[], id: string) => {
  if (!treeList || !treeList.length) {
    return [];
  }
  let myTreeObj = getMyTreeListById(key, treeList, id);
  if (!myTreeObj) {
    return [];
  }
  let treeIds: any[] = [];
  const getTreeIds = (_treeList: any[]) => {
    _treeList.forEach((item) => {
      const { children } = item;
      treeIds.push(item[key]);
      if (children && children.length) {
        getTreeIds(children);
      }
    });
  }
  getTreeIds([myTreeObj]);
  return treeIds;
}

/**
 * 扁平化树形(应该可以用flat来扁平化了)
 * @param list tree数组
 */
export function getPeerList(list: any) {
  const peerList: any = [];
  const loopFunc = (_list: any) => {
    for (let i = 0; i < _list.length; i++) {
      const item = _list[i];
      peerList.push(item);
      if (item.sonList && item.sonList.length) {
        loopFunc(item.sonList);
      }
    }
  };
  loopFunc(list);
  return peerList;
}

/**
 * 根据字符串筛选tree
 * @param origin 原始tree，子集为children
 * @param value 筛选字符串
 * @param key 字符串对比的key
 */
export const filterTreeData = (
  origin: any[],
  value: string,
  key: string,
): any[] => {
  const resData = [];
  for (const item of origin) {
    const { children } = item;
    if (children && filterTreeData(children, value, key).length) {
      resData.push({
        ...item,
        children: filterTreeData(children, value, key),
      });
      continue;
    }
    if (typeof item[key] === 'string' && item[key].indexOf(value) > -1) {
      resData.push(item);
    }
  }
  return resData;
};