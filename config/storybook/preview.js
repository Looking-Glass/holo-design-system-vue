import('../../public/assets/styles.css')

import Vue from 'vue'
import { addDecorator } from '@storybook/vue'
import PortalVue from 'portal-vue'

Vue.use(PortalVue)

// Decorator to center-align all stories
addDecorator(() => ({
  template: '<div><story/><portal-target name="overlay"></portal-target></div>',
}));
