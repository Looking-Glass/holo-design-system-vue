<template>
  <div class="block overflow-visible text-white">
    <div
      class="fixed top-0 left-0 w-full z-40 transition-all global-header-solid-bg"
      :style="`transform: translateY(${headerTransform})`"
    >
      <div ref="topHeader">
        <div v-if="hasCallout && calloutVisible">
          <div class="bg-black text-white bg-opacity-70 backdrop-blur-xl text-center p-2">
            <Container size="full">
              <div class="relative">
                <slot name="callout">
                </slot>
                <button aria-label="Close message" class="absolute top-1/2 right-0 transform -translate-y-1/2" @click="closeCallout">
                  ×
                </button>
              </div>
            </Container>
          </div>
        </div>
        <header
          class="lg:hidden global-header-solid-bg"
          :class="{'pb-4' : isMenuOpen}"
          ref="mobileHeader"
        >
          <Container size="full" :class="{'border-b border-gray-700 pb-1' : hasSubnav && showSubnav}">
            <div class="grid items-center justify-between content-between grid-flow-col auto-cols-auto py-2">
              <component :is="linkComponent" :href="links['home']" class="global-header-link">
                <img :src="logo" alt="Looking Glass Factory Logo" class="w-[60px] min-w-[40px]"/>
              </component>
              <Button variant="secondary" color="white" @click="toggleMenu" aria-controls="global-header-mobile-menu" :aria-expanded="isMenuOpen">
                <span v-if="!isMenuOpen">
                  Menu
                </span>
                <span v-if="isMenuOpen">
                  Close
                </span>
              </Button>
            </div>
            <div class="space-y-4 bg-black rounded-md bg-opacity-70 backdrop-blur-lg p-4" :hidden="!isMenuOpen" id="global-header-mobile-menu">
              <DisclosureMenu label="Create" :classes="{ wrapper: 'w-full', trigger: 'w-full global-header-link', menu: 'py-2 rounded-md' }">
                <MenuItem :href="links['create-holograms-in-unity']">Holograms in Unity</MenuItem>
                <MenuItem :href="links['create-holograms-in-unreal']">Holograms in Unreal</MenuItem>
                <MenuItem :href="links['create-holograms-in-blender']">Holograms in Blender</MenuItem>
                <MenuItem :href="links['create-holograms-from-phones']">Holograms from Phones</MenuItem>
                <MenuItem :href="links['create-holograms-from-2D-images']">Holograms from 2D images</MenuItem>
                <MenuItem :href="links['create-hologram-learn-hub']">Hologram Learn Hub</MenuItem>
              </DisclosureMenu>
              <DisclosureMenu label="Share" :classes="{ wrapper: 'w-full', trigger: 'w-full global-header-link', menu: 'py-2' }">
                <MenuItem :href="links['share-block']">Pilot program: Looking Glass Block</MenuItem>
              </DisclosureMenu>
              <DisclosureMenu label="Display" :classes="{ wrapper: 'w-full', trigger: 'w-full global-header-link', menu: 'py-2' }">
                <MenuItem :href="links['display-holographic-displays']">Desktop holographic displays</MenuItem>
                <MenuItem :href="links['display-65-inch']">Massive holographic displays (New!)</MenuItem>
                <MenuItem :href="links['display-getting-started']">Getting started with your holographic display</MenuItem>
              </DisclosureMenu>
              <DisclosureMenu label="Resources" :classes="{ wrapper: 'w-full', trigger: 'w-full global-header-link', menu: 'py-2' }">
                <MenuItem :href="links['resources-support']" target="_blank">Support</MenuItem>
                <MenuItem :href="links['resources-downloads']" target="_blank">Software Downloads</MenuItem>
                <MenuItem :href="links['resources-docs']" target="_blank">Documentation</MenuItem>
                <MenuItem :href="links['resources-discord']" target="_blank">Discord Community</MenuItem>
                <MenuItem :href="links['resources-learn']" target="_blank">Hologram Learn Hub</MenuItem>
                <MenuItem :href="links['resources-blog']" target="_blank">Blog</MenuItem>
              </DisclosureMenu>
              <component :is="linkComponent" :href="links['business']" class="global-header-link">
                Resellers
              </component>
              <component :is="(onCartClick && cartId && typeof cartIsExpanded !== 'undefined') ? 'button' : linkComponent" :href="links['cart']" class="global-header-link" :aria-controls="cartId" :aria-expanded="cartIsExpanded" @click="onCartClick() || false">
                <span class="js-cart-toggle">Cart</span>
              </component>
              <DisclosureMenu label="Account" hideLabel :classes="{ wrapper: 'w-full', trigger: 'w-full global-header-link', menu: 'py-2' }">
                <MenuItem v-if="!isLoggedIn" @click="onLogin" :href="links['login']" class="global-header-link">Login/Signup</MenuItem>
                <MenuItem v-if="isLoggedIn" :href="links['profile']" target="_blank" class="global-header-link">Profile</MenuItem>
                <MenuItem v-if="isLoggedIn" @click="onLogout" :href="links['logout']" class="global-header-link">Logout</MenuItem>
              </DisclosureMenu>
            </div>
          </Container>
        </header>
        <header
          class="hidden lg:block"
          ref="desktopHeader"
        >
          <Container size="large" :class="{'border-b border-white border-opacity-20' : hasSubnav && showSubnav}">
            <nav class="grid grid-cols-3 gap-4 justify-between items-center py-4">
              <div class="flex gap-7 items-center">
                <Menu label="Create" class="global-header-link">
                  <MenuItem :href="links['create-holograms-in-unity']">Holograms in Unity</MenuItem>
                  <MenuItem :href="links['create-holograms-in-unreal']">Holograms in Unreal</MenuItem>
                  <MenuItem :href="links['create-holograms-in-blender']">Holograms in Blender</MenuItem>
                  <MenuItem :href="links['create-holograms-from-phones']">Holograms from Phones</MenuItem>
                  <MenuItem :href="links['create-holograms-from-2D-images']">Holograms from 2D images</MenuItem>
                  <MenuItem :href="links['create-hologram-learn-hub']">Hologram Learn Hub</MenuItem>
                </Menu>
                <Menu label="Share" class="global-header-link">
                  <MenuItem :href="links['share-block']">Pilot program: Looking Glass Block</MenuItem>
                </Menu>
                <Menu label="Display" class="global-header-link">
                  <MenuItem :href="links['display-holographic-displays']">Desktop holographic displays</MenuItem>
                  <MenuItem :href="links['display-65-inch']">Massive holographic displays (New!)</MenuItem>
                  <MenuItem :href="links['display-getting-started']">Getting started with your holographic display</MenuItem>
                </Menu>
              </div>
              <div class="text-center">
                <component :is="linkComponent" :href="links['home']" class="global-header-link">
                  <img :src="logo" alt="Looking Glass Factory Logo" class="w-[60px] min-w-[40px] inline-block"/>
                </component>
              </div>
              <div class="flex gap-7 items-center justify-end">
                <Menu label="Resources" class="global-header-link">
                  <MenuItem :href="links['resources-support']" target="_blank">Support</MenuItem>
                  <MenuItem :href="links['resources-downloads']" target="_blank">Software Downloads</MenuItem>
                  <MenuItem :href="links['resources-docs']" target="_blank">Documentation</MenuItem>
                  <MenuItem :href="links['resources-discord']" target="_blank">Discord Community</MenuItem>
                  <MenuItem :href="links['resources-learn']" target="_blank">Hologram Learn Hub</MenuItem>
                  <MenuItem :href="links['resources-blog']" target="_blank">Blog</MenuItem>
                </Menu>
                <component :is="linkComponent" :href="links['business']" class="global-header-link">
                  Resellers
                </component>
                <component :is="(onCartClick && cartId && typeof cartIsExpanded !== 'undefined') ? 'button' : linkComponent" :href="links['cart']" class="global-header-link" :aria-controls="cartId" :aria-expanded="cartIsExpanded" @click="onCartClick() || false">
                  <svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" class="js-cart-toggle"><path d="M1.458.5a.625.625 0 100 1.25h1.149a.62.62 0 01.613.508l.125.65 1.343 7.057a2.716 2.716 0 002.661 2.202h7.802a2.715 2.715 0 002.66-2.202l1.344-7.056a.627.627 0 00-.613-.742H4.475l-.027-.143A1.882 1.882 0 002.607.5H1.458zm3.256 2.917h13.072l-1.202 6.315a1.452 1.452 0 01-1.433 1.185H7.349c-.704 0-1.3-.494-1.433-1.185V9.73L4.714 3.417zM8.334 13a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm5.833 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill="currentColor"></path></svg>
                  <span class="sr-only">Cart</span>
                </component>
                <Menu label="Account" hideLabel class="global-header-link" right>
                  <template slot="icon">
                    <svg width="14" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 .667a4.176 4.176 0 00-4.167 4.166A4.176 4.176 0 007 9a4.176 4.176 0 004.167-4.167A4.176 4.176 0 007 .667zm0 1.25a2.907 2.907 0 012.917 2.916A2.907 2.907 0 017 7.75a2.907 2.907 0 01-2.917-2.917A2.907 2.907 0 017 1.917zm-5.009 8.75c-.908 0-1.658.75-1.658 1.657v.634c0 1.502.95 2.664 2.211 3.36 1.262.696 2.86 1.015 4.456 1.015 1.597 0 3.194-.32 4.456-1.015 1.075-.594 1.885-1.542 2.111-2.735h.1v-1.259c0-.908-.75-1.657-1.658-1.657H1.99zm0 1.25h10.018a.4.4 0 01.409.407v.01h-.001v.624c0 .999-.561 1.712-1.565 2.266-1.005.554-2.428.86-3.852.86s-2.848-.306-3.852-.86-1.565-1.267-1.565-2.266v-.634c0-.232.175-.407.408-.407z" fill="currentColor"></path></svg>
                  </template>
                  <MenuItem v-if="!isLoggedIn" @click="onLogin" :href="links['login']" class="global-header-link">Login/Signup</MenuItem>
                  <MenuItem v-if="isLoggedIn" :href="links['profile']" target="_blank" class="global-header-link">Profile</MenuItem>
                  <MenuItem v-if="isLoggedIn" @click="onLogout" :href="links['logout']" class="global-header-link">Logout</MenuItem>
                </Menu>
              </div>
            </nav>
          </Container>
        </header>
      </div>
      <nav v-if="hasSubnav && showSubnav" ref="bottomHeader" class="w-full z-10">
        <Container size="full">
          <slot name="subnav" />
        </Container>
      </nav>
    </div>
  </div>
</template>

<script>
import Container from './Container'
import DisclosureMenu from './DisclosureMenu'
import MenuDark from './MenuDark'
import MenuItemDark from './MenuItemDark'
import Button from './Button'

export default {
  components: {
    Container,
    DisclosureMenu,
    Menu: MenuDark,
    MenuItem: MenuItemDark,
    Button
  },
  data() {
    return {
      calloutVisible: true,
      headerTransform: '0px',
      lastScroll: 0,
      solidBackground: false,
      isMenuOpen: false
    }
  },
  props: {
    logo: {
      type: String,
      default: '/img/logomark.png'
    },
    links: {
      type: Object,
      default() {
        return {
          home: 'https://lookingglassfactory.com/',
          'create-holograms-in-unity': 'https://lookingglassfactory.com/software#holoplay-unity-plugin',
          'create-holograms-in-unreal': 'https://lookingglassfactory.com/software#holoplay-plugin-for-unreal-engine',
          'create-holograms-in-blender': 'https://lookingglassfactory.com/blender-add-on',
          'create-holograms-from-phones': 'https://lookingglassfactory.com/holoplaystudio',
          'create-holograms-from-2D-images': 'https://lookingglassfactory.com/account/2dto3d',
          'create-hologram-learn-hub': 'https://learn.lookingglassfactory.com/',
          'display-holographic-displays': 'https://lookingglassfactory.com/product/overview',
          'display-65-inch': 'https://lookingglassfactory.com/looking-glass-65',
          'display-getting-started': 'https://learn.lookingglassfactory.com/onboarding',
          'share-block': 'https://hologramsontheinternet.com',
          'resources-support': 'https://looking-glass.helpscoutdocs.com/',
          'resources-downloads': 'https://lookingglassfactory.com/software',
          'resources-docs': 'https://docs.lookingglassfactory.com/',
          'resources-discord': 'https://discord.com/invite/lookingglassfactory',
          'resources-learn': 'https://learn.lookingglassfactory.com/',
          'resources-blog': 'https://blog.lookingglassfactory.com/',
          business: 'https://lookingglassfactory.com/resellers'
          // 'product': 'https://lookingglassfactory.com/product/overview',
          // 'portrait': 'https://lookingglassfactory.com/portrait',
          // '4k': 'https://lookingglassfactory.com/4k',
          // '8k': 'https://lookingglassfactory.com/8k',
          // 'accessories': 'https://lookingglassfactory.com/product/accessories',
          // 'software': 'https://lookingglassfactory.com/software',
          // 'solutions': 'https://lookingglassfactory.com/solutions',
          // 'community': 'https://learn.lookingglassfactory.com/',
          // '2d3d-marketing': 'https://lookingglassfactory.com/3d-photos',
          // '2d3d': 'https://lookingglassfactory.com/account/2dto3d',
          // 'getting-started': 'https://learn.lookingglassfactory.com/onboarding',
          // 'referral-program': 'https://lookingglassfactory.com/referral',
          // 'docs': 'https://docs.lookingglassfactory.com',
          // 'how-it-works': 'https://lookingglassfactory.com/tech',
          // 'holograms': 'https://lookingglassfactory.com/holograms',
          // 'whats-new': 'https://lookingglassfactory.com/whats-new ',
          // 'blog': 'https://blog.lookingglassfactory.com',
          // 'support': 'https://looking-glass.helpscoutdocs.com/',
          // 'about': 'https://lookingglassfactory.com/about',
          // 'signup': 'https://lookingglassfactory.com/account/signup',
          // 'profile': 'https://lookingglassfactory.com/account/profile',
          // 'ambassador-program': '/',
          // 'discord': 'https://look.glass/discord',
          // 'hopstudio': 'https://lookingglassfactory.com/holoplaystudio',
          // 'unity': '/',
          // 'blender': 'https://lookingglassfactory.com/blender-add-on'
        }
      }
    },
    linkComponent: {
      type: [Object, String],
      default: 'a'
    },
    onCartClick: {
      type: Function,
      default: undefined
    },
    onLogin: {
      type: Function,
      default: undefined
    },
    onLogout: {
      type: Function,
      default: undefined
    },
    cartId: {
      type: String,
      default: undefined
    },
    cartIsExpanded: {
      type: Boolean,
      default: undefined
    },
    isLoggedIn: {
      type: Boolean,
      default: false
    },
    isAlwaysFixed: {
      type: Boolean,
      default: false
    },
    showSubnav: {
      type: Boolean,
      default: false
    },
    mobileSlidePoint: {
      type: Number,
      default: 800
    },
    desktopSlidePoint: {
      type: Number,
      default: 1080
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleHeaderOnScroll, { passive: true })

    window.addEventListener('resize', this.handleHeaderOnScroll, { passive: true })

    this.setGlobalHeaderHeight()

    window.addEventListener('resize', this.setGlobalHeaderHeight, { passive: true })
  },
  computed: {
    hasCallout () {
      return !!this.$slots.callout
    },
    hasSubnav () {
      return !!this.$slots.subnav
    },
  },
  methods: {
    closeCallout () {
      this.calloutVisible = false
    },
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    },
    setGlobalHeaderHeight () {
      const topHeaderHeight = this.$refs.topHeader ? this.$refs.topHeader.getBoundingClientRect().height : 0
      const bottomHeaderHeight = this.$refs.bottomHeader ? this.$refs.bottomHeader.getBoundingClientRect().height : 0
      let root = document.documentElement;
      root.style.setProperty('--global-header-height', bottomHeaderHeight + topHeaderHeight + 'px')
      this.$emit('loaded', true)
    },
    handleHeaderOnScroll () {
      const scrollDelta = 50
      const currentScroll = window.scrollY
      const topHeaderHeight = this.$refs.topHeader ? this.$refs.topHeader.getBoundingClientRect().height : 0
      const isMobile = !!(this.$refs.mobileHeader.offsetWidth || this.$refs.mobileHeader.offsetHeight || this.$refs.mobileHeader.getClientRects().length );

      if (this.isAlwaysFixed) {
        return
      }

      if (Math.abs(this.lastScroll - currentScroll) <= scrollDelta) {
        return
      }

      if (isMobile) {
        if (currentScroll > this.mobileSlidePoint) {
          this.solidBackground = true
        } else {
          this.solidBackground = false
        }

      } else {
        // We're past the fold
        if (currentScroll > 0) {
          // We're moving down
          if (currentScroll > this.lastScroll) {
            this.headerTransform = '-' + topHeaderHeight + 'px'

          // We're moving up
          } else {
            this.solidBackground = true
            this.headerTransform = '0px'
          }
        // We're not past the fold
        } else {
          this.solidBackground = false
          this.headerTransform = '0px'
        }
      }

      this.lastScroll = currentScroll
    }
  }
}
</script>

<style>
.global-header-link {
  @apply font-sans text-base cursor-pointer block text-white;
}

.global-header-solid-bg {
  @apply bg-white bg-opacity-10 backdrop-blur-lg;
  /* -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px); */
}
</style>
