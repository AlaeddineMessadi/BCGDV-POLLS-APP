import React from "react";
import Enzyme from 'enzyme';
import Adapter, { mount } from 'enzyme-adapter-react-16';

import { MemoryRouter } from "react-router-dom";

import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

it("renders an app with 2 routes, home and modeler page", async () => {
  const wrapper = Enzyme.mount(
    <MemoryRouter initialEntries={ ["/"] } initialIndex={ 0 }>
      <App />
    </MemoryRouter>
  );

  // Home title is rendered
  expect(wrapper.contains(<h1>BCGDV Poll App</h1>)).toEqual(true);
  expect(wrapper.contains(<h2>Questions</h2>)).toEqual(true);
  expect(wrapper.contains(<h2>Questions</h2>)).toEqual(true);


  // When clicking the /create link
  wrapper.find('[href="/modeler"]').simulate("click", { button: 0 });

  // // Modeler title is rendered
  expect(wrapper.contains(<h2>Create Question </h2>)).toEqual(true);
  expect(wrapper.contains(<label>Question (*):</label>)).toEqual(true);

  // When clicking the / link
  wrapper.find('[href="/modeler"]').simulate("click", { button: 0 });

  // When clicking the /details link
  wrapper.find('[href="/details/10451"]').simulate("click", { button: 0 });

  // // Modeler title is rendered
  expect(wrapper.contains(<h2>Create Question </h2>)).toEqual(true);
  expect(wrapper.contains(<label>Question (*):</label>)).toEqual(true);
});