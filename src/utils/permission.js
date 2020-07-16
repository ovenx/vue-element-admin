import store from '@/store'

/**
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/directive.vue
 */
export default function checkAuth(value, checkAll) {
  if (typeof checkAll === 'undefined') {
    checkAll = false
  }
  const hasAuthorization = store.getters.hasAuthorization
  if (typeof value === 'string') {
    return hasAuthorization(value)
  } else if (value && value instanceof Array && value.length > 0) {
    if (checkAll) {
      return value.every(auth => {
        return hasAuthorization(auth)
      })
    } else {
      return value.some(auth => {
        return hasAuthorization(auth)
      })
    }
  } else {
    console.error(`need auths! Like v-auths="['admin','editor']"`)
    return false
  }
}
