import Vue from "vue";
import PureTaskList from "@/components/PureTaskList";
import { WithPinnedTasks } from "@/components/PureTaskList.stories.js";

it("renders pinned tasks at the start of the list", () => {
  // render task list
  const Constructor = Vue.extend(PureTaskList);
  const vm = new Constructor({
    propsData: WithPinnedTasks.args,
  }).$mount();
  const firstTaskPinned = vm.$el.querySelector(
    ".list-item:nth-child(1).TASK_PINNED"
  );

  expect(firstTaskPinned).not.toBe(null);
});
