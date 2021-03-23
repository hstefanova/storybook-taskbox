import Vue from 'vue'
import Vuex from 'vuex'

import PureInboxScreen from './PureInboxScreen.vue';

import { action } from '@storybook/addon-actions'
import * as TaskListStories from './PureTaskList.stories'

// We see that although the error story works just fine, we have an issue in the default story, because the TaskList has no Vuex store to connect to. (You also would encounter similar problems when trying to test the PureInboxScreen with a unit test).

// The good news is that it is easy to supply a Vuex store to the PureInboxScreen in a story! We can create a new store in our story file and pass it in as the context of the story:

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    tasks: TaskListStories.Default.args.tasks,
  },
  actions: {
    pinTask(context, id) {
      action('pin-task')(id);
    },
    archiveTask(context, id) {
      action('archive-task')(id);
    },
  },
 });

export default {
  title: 'PureInboxScreen',
  component: PureInboxScreen,
  excludeStories: /.*store$/,
};

const Template = (args, {argTypes}) => ({
    components: {PureInboxScreen},
    props: Object.keys(argTypes),
    template: '<PureInboxScreen v-bind="$props" />',
    store
})

export const Default = Template.bind({})

export const Error = Template.bind({})
Error.args = {
    error: true
}