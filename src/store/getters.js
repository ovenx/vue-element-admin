const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  auths: state => state.user.auths,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  hasAuthorization: state => authorization => {
    return state.authorization.some(auth => {
      return auth === authorization
    })
  }
}
export default getters
