const vcCake = require('vc-cake')

const data = {
  sourceID: window.vcvSourceID,
  pageTemplates: window.VCV_PAGE_TEMPLATES ? window.VCV_PAGE_TEMPLATES() : '',
  showFeedbackForm: window.VCV_SHOW_FEEDBACK_FORM && window.VCV_SHOW_FEEDBACK_FORM(),
  showInitialHelpers: window.VCV_SHOW_INITIAL_HELPERS && window.VCV_SHOW_INITIAL_HELPERS(),
  showDataCollectionPopup: window.VCV_SHOW_DATA_COLLECTION_POPUP && window.VCV_SHOW_DATA_COLLECTION_POPUP(),
  hubGetElements: window.VCV_HUB_GET_ELEMENTS ? window.VCV_HUB_GET_ELEMENTS() : {},
  editorType: window.VCV_EDITOR_TYPE ? window.VCV_EDITOR_TYPE() : 'default',
  elementsGlobalsUrl: window.vcvElementsGlobalsUrl,
  nonce: window.vcvNonce,
  activationType: window.vcvActivationType,
  activationFinishedUrl: window.vcvActivationFinishedUrl,
  vcvErrorReportUrl: window.vcvErrorReportUrl, // vcv prefix added to avoid duplicating
  localizations: window.VCV_I18N ? window.VCV_I18N() : {},
  hubGetAddonTeaser: window.VCV_HUB_GET_ADDON_TEASER ? window.VCV_HUB_GET_ADDON_TEASER() : {},
  hubGetAddons: window.VCV_HUB_GET_ADDONS ? window.VCV_HUB_GET_ADDONS() : {},
  addonElementPresets: window.VCV_ADDON_ELEMENT_PRESETS ? window.VCV_ADDON_ELEMENT_PRESETS() : [],
  hubGetGroups: window.VCV_HUB_GET_GROUPS ? window.VCV_HUB_GET_GROUPS() : {},
  hubGetCategories: window.VCV_HUB_GET_CATEGORIES ? window.VCV_HUB_GET_CATEGORIES() : {},
  hubGetTeaser: window.VCV_HUB_GET_TEASER ? window.VCV_HUB_GET_TEASER() : {},
  hubGetTemplatesTeaser: window.VCV_HUB_GET_TEMPLATES_TEASER ? window.VCV_HUB_GET_TEMPLATES_TEASER() : {},
  getSharedAssets: window.VCV_GET_SHARED_ASSETS ? window.VCV_GET_SHARED_ASSETS() : {},
  dataCollectionEnabled: window.VCV_DATA_COLLECTION_ENABLED,
  isAnyActivated: window.vcvIsAnyActivated,
  isPremiumActivated: window.vcvIsPremiumActivated,
  isFreeActivated: window.vcvIsFreeActivated,
  pageTemplatesLayoutsCurrent: window.VCV_PAGE_TEMPLATES_LAYOUTS_CURRENT && window.VCV_PAGE_TEMPLATES_LAYOUTS_CURRENT(),
  pageTemplatesLayouts: window.VCV_PAGE_TEMPLATES_LAYOUTS && window.VCV_PAGE_TEMPLATES_LAYOUTS(),
  headerTemplates: window.VCV_HEADER_TEMPLATES && window.VCV_HEADER_TEMPLATES(),
  sidebarTemplates: window.VCV_SIDEBAR_TEMPLATES && window.VCV_SIDEBAR_TEMPLATES(),
  footerTemplates: window.VCV_FOOTER_TEMPLATES && window.VCV_FOOTER_TEMPLATES(),
  showPremiumPromoPopup: window.VCV_SHOW_PREMIUM_PROMO_POPUP && window.VCV_SHOW_PREMIUM_PROMO_POPUP(),
  tutorialPageUrl: window.VCV_TUTORIAL_PAGE_URL && window.VCV_TUTORIAL_PAGE_URL(),
  createNewUrl: window.VCV_CREATE_NEW_URL && window.VCV_CREATE_NEW_URL(),
  manageOptions: window.VCV_MANAGE_OPTIONS && window.VCV_MANAGE_OPTIONS(),
  vcvManageOptions: window.vcvManageOptions, // vcv prefix added to avoid duplicating
  goPremiumUrl: window.VCV_GO_PREMIUM_URL ? window.VCV_GO_PREMIUM_URL() : '',
  vcvGoPremiumUrl: window.vcvGoPremiumUrl, // vcv prefix added to avoid duplicating
  gettingStartedUrl: window.vcvGettingStartedUrl,
  updateUrl: window.VCV_UPDATE_URL && window.VCV_UPDATE_URL(),
  goFreeUrl: window.VCV_GO_FREE_URL ? window.VCV_GO_FREE_URL() : '',
  authorApiKey: window.VCV_AUTHOR_API_KEY && window.VCV_AUTHOR_API_KEY(),
  updateActions: window.VCV_UPDATE_ACTIONS && window.VCV_UPDATE_ACTIONS(),
  slug: window.VCV_SLUG && window.VCV_SLUG(),
  updateProcessActionUrl: window.VCV_UPDATE_PROCESS_ACTION_URL && window.VCV_UPDATE_PROCESS_ACTION_URL(),
  updateGlobalVariablesUrl: window.VCV_UPDATE_GLOBAL_VARIABLES_URL && window.VCV_UPDATE_GLOBAL_VARIABLES_URL(),
  updateVendorUrl: window.VCV_UPDATE_VENDOR_URL && window.VCV_UPDATE_VENDOR_URL(),
  updateWPBundleUrl: window.VCV_UPDATE_WP_BUNDLE_URL && window.VCV_UPDATE_WP_BUNDLE_URL(),
  pageBack: window.vcvPageBack,
  licenseType: window.VCV_LICENSE_TYPE && window.VCV_LICENSE_TYPE(),
  rebuildPostSkipPost: window.vcvRebuildPostSkipPost,
  errorReportUrl: window.VCV_ERROR_REPORT_URL && window.VCV_ERROR_REPORT_URL(),
  supportUrl: window.VCV_SUPPORT_URL && window.VCV_SUPPORT_URL(),
  licenseKey: window.VCV_LICENSE_KEY && window.VCV_LICENSE_KEY(),
  apiUrl: window.VCV_API_URL && window.VCV_API_URL(),
  pluginUrl: window.VCV_PLUGIN_URL && window.VCV_PLUGIN_URL(),
  licenseUnsplashAuthorApiKey: window.VCV_LICENSE_UNSPLASH_AUTHOR_API_KEY && window.VCV_LICENSE_UNSPLASH_AUTHOR_API_KEY(),
  adminAjaxUrl: window.vcvAdminAjaxUrl,
  upgradeUrlGiphy: window.vcvUpgradeUrlGiphy,
  upgradeUrlUnsplash: window.vcvUpgradeUrlUnsplash,
  createMenuUrl: window.vcvCreateMenuUrl
}

const dataManager = {
  get: (dataKey) => {
    if (Object.prototype.hasOwnProperty.call(data, dataKey)) {
      return data[dataKey]
    }
    return null
  }
}

vcCake.addService('dataManager', dataManager)