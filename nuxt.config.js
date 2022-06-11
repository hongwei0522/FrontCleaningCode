export default {
  mode: 'universal',
  // Target: https://go.nuxtjs.dev/config-target
  //  壓縮圖片 https://squoosh.app/editor
  target: 'static',
  router: {
    base: '/jackercleaning/'
  },
  head: {
    titleTemplate: '%s',
    title: '潔客幫-居家清潔、鐘點清潔',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:title'  , property: 'og:title'  , content: '潔客幫-居家清潔、鐘點清潔'},
      { hid: 'og:image' , property: 'og:image' , content: 'smallLogo.png'},
      { hid: 'og:type' , property: 'og:type' , content: 'website'},
      // { hid: 'og:url' , property: 'og:url' , content: ''},
      { hid: 'description', name: 'description', content: '家，是每個人成長的地方，構成了無數與家人間歡笑、溫暖的回憶。 大家的生活越來越忙碌，不僅工作要忙、家中也有大大小小瑣碎的事情， 漸漸地家裡環境越來越髒亂，早就忘了家裡煥然一新的感覺， 在這樣的背景下，潔客幫應運而生，讓每個人享受一個更好的家。' },
      { hid: 'og:description' , property: 'og:description' , content: '家，是每個人成長的地方，構成了無數與家人間歡笑、溫暖的回憶。 大家的生活越來越忙碌，不僅工作要忙、家中也有大大小小瑣碎的事情， 漸漸地家裡環境越來越髒亂，早就忘了家裡煥然一新的感覺， 在這樣的背景下，潔客幫應運而生，讓每個人享受一個更好的家。'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/youngbook/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/global.css',
    '~assets/styles/global.scss',
    '~assets/fonts/roboto/roboto.css',
    '~assets/fonts/NotoSansTC/NotoSansTC.css',
    // 'swiper/swiper-bundle.css',
    'swiper/css/swiper.css',
    'animate.css/animate.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-awesome-swiper',
    { src: '~/plugins/vue-lazyload', ssr: true },
    '~plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient }) {
      if (!isDev) {
          config.output.publicPath = './_nuxt/'
      }
      return config;
    },
    transpile: ['resize-detector'],
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
    postcss: {
      'postcss-px2rem-exclude': {
          emUnit: 75,
          exclude: '/node_modules|vant/'
      },
      'autoprefixer': {
        flexbox: true,
        grid: true,
        overrideBrowserslist: ['last 3 versions', '> 1%', 'ie 8', 'ie 7'],
      },
      order: 'cssnanoLast'
    },
    vendor: ['vue-lazyload', 'element-ui'],
    html:{
      minify:{
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }
  }
}
