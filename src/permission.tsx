import { setTreeData } from "./tree";

/**
 * 权限标签判断
 * @param name 
 * @param flags 
 */
export const power = (name: string, flags: any[]) => {
  let isPower = false
  flags && flags.map((v: any) => {
      switch (v.code) {
          case name:
              isPower = true;
              break;
          default:
              break;
      }
  })
  return isPower
}

/**
 * 有某个权限就可以
 * @param allowPermissions 
 * @param ownerPermissions 
 */
export const somePermissionAllow = (allowPermissions: string[] = [], ownerPermissions: string[] = []) => (
  !allowPermissions.length || ownerPermissions.some((perm) => allowPermissions.includes(perm))
)

/**
 * 有所有权限才可以
 * @param allowPermissions 
 * @param ownerPermissions 
 */
export const allPermissionAllow = (allowPermissions: string[] = [], ownerPermissions: string[] = []) => (
  !allowPermissions.length || allowPermissions.every((perm) => ownerPermissions.includes(perm))
)


// 权限item
interface IPermission {
  id?: string; // 权限唯一标识
  name?: string; // 权限名称
  code?: string; // 权限code
  key: string;
  fatherCode?: string; // 父级权限码
  description?: string; // 权限描述
  createTime?: string;
  modifyTime?: string;
  type?: number; // // 0-系统权限 1-部门权限
}
export const buildPermissionTree=  (permissions: IPermission[]) => {
  if (!permissions || !permissions.length) {
    return [];
  }
  return setTreeData(permissions, 'code', 'fatherCode', 'children');
}