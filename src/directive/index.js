import checkAuth from '@/utils/permission'

export default (Vue) => {
  Vue.directive('auth', {
    inserted: (el, binding) => {
      if (!checkAuth(binding.value)) {
        el.remove()
      }
    }
  })
  Vue.directive('auth-all', {
    inserted: (el, binding) => {
      if (!checkAuth(binding.value, true)) {
        el.remove()
      }
    }
  })
}
