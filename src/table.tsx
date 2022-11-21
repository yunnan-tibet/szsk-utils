interface ITableHeader {
  key: string;
  name: string;
  fixed?: boolean;
}

/**
 * 自定义表头方式获取表头列表
 * @param _columns 带有render的列表
 * @param showedAttrs 需要展示的headers
 * @param attrList 表格所有headers
 */
export const getShowedTableHeaders = (_columns: any[], showedAttrs: string[], attrList: ITableHeader[]) => {
  const fixedAttrs = attrList.filter((itme: ITableHeader) => itme.fixed).map(item => item.key);
  return _columns
  .filter((item: any) => ([...(showedAttrs || []), ...fixedAttrs]).includes(item.key))
  .map((item: any, index: number) => {
    // 加相关数据
    attrList.forEach((keyItem: any) => {
      if (keyItem.key === item.key) {
        item.dataIndex = keyItem.key;
        item.title = item.title || keyItem.name;
        item.width = item.width || 200;
      }
    });
    return { ...item };
  });
}
