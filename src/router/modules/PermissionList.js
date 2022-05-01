import layout from '@/layout'

export default {
  path: '/user',
  component: layout,
  redirect: '/user/manage',
  name: 'permissionList',
  meta: {
    title: 'user',
    icon: 'personnel'
  },
  /*eslint-disable*/
  children: [{
    path: '/user/permission',
    component: () => import('@/views/permission-list/index'),
    meta: {
      title: 'permissionList',
      icon: 'permission'
    }
  }]
}
