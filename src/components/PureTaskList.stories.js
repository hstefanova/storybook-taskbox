import PureTaskList from './PureTaskList';
import * as TaskStories from './Task.stories';

export default {
  component: PureTaskList,
  title: 'PureTaskList',
  decorators: [() => '<div style="padding: 3rem;"><story /></div>'],
};

const Template = (args, { argTypes }) => ({
  components: { PureTaskList },
  props: Object.keys(argTypes),
  // We are reusing our actions from task.stories.js
  methods: TaskStories.actionsData,
  template: '<PureTaskList v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />',
});

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  tasks: [
    { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { ...TaskStories.Pinned.args.task, id: '6', title: 'Task 6 (pinned)' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
    loading: true,
    tasks: []
}

export const Empty = Template.bind({});
Empty.args = {
    ...Loading.args,
    loading: false
}
