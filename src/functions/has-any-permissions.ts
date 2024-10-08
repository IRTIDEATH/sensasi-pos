import type { User } from '@/models/table-types/user'

import { Permission } from '@/enums/permission'

/**
 * Check if the user has any of the provided permissions
 *
 * @param permissions - The permissions to check
 * @returns Whether the user has any of the provided permissions
 */
export function hasAnyPermissions(
  // eslint-disable-next-line
  permissions: Permission[],

  // eslint-disable-next-line
  user?: User,
): boolean {
  /**
   * @todo delete this when #85 is solved
   */
  return process.env.NODE_ENV !== 'production'

  // if (!user) {
  // const userJson = localStorage?.getItem('logged-in-user')
  // if (!userJson) return false

  //   user = userJson ? (JSON.parse(userJson) as user) : undefined
  // }

  // return permissions.some(permission => user.permissions.includes(permission))
}
