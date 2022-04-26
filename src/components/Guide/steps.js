import i18n from '@/i18n'

const t = i18n.global.t

/* eslint-disable */
const steps = [{
    element: '#guide-start',
    popover: {
      title: t('msg.guide.guideTitle'),
      description: t('msg.guide.guideDesc'),
      position: 'bottom-right'
    }
  },
  {
    element: '#guide-hamburger',
    popover: {
      title: t('msg.guide.hamburgerTitle'),
      description: t('msg.guide.hamburgerDesc')
    }
  },
  {
    element: '#guide-breadcrumb',
    popover: {
      title: t('msg.guide.breadcrumbTitle'),
      description: t('msg.guide.breadcrumbDesc')
    }
  },
  {
    element: '#guide-search',
    popover: {
      title: t('msg.guide.searchTitle'),
      description: t('msg.guide.searchDesc'),
      position: 'bottom-right'
    }
  },
  {
    element: '#guide-full',
    popover: {
      title: t('msg.guide.fullTitle'),
      description: t('msg.guide.fullDesc'),
      position: 'bottom-right'
    }
  },
  {
    element: '#guide-theme',
    popover: {
      title: t('msg.guide.themeTitle'),
      description: t('msg.guide.themeDesc'),
      position: 'bottom-right'
    }
  },
  {
    element: '#guide-lang',
    popover: {
      title: t('msg.guide.langTitle'),
      description: t('msg.guide.langDesc'),
      position: 'bottom-right'
    }
  },
  {
    element: '#guide-tags',
    popover: {
      title: t('msg.guide.tagTitle'),
      description: t('msg.guide.tagDesc')
    }
  },
  {
    element: '#guide-sidebar',
    popover: {
      title: t('msg.guide.sidebarTitle'),
      description: t('msg.guide.sidebarDesc'),
      position: 'right-center'
    }
  }
]
export default steps
