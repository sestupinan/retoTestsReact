import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../Like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like />,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Checkbox component", () => {

  it("Likes are 0 by default", () => {
    const numlikes = container.querySelector("p");
    expect(numlikes.textContent).toBe("Likes: 0");
  });

  it("Likes increment when clicking increment button", () => {
    const numlikes = container.querySelector("p");
    const btn = container.querySelector("#increment");
    act(() => {
        btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(numlikes.textContent).toBe("Likes: 1");
  });

  it("Likes decrease when clicking decrement button", () => {
    const numlikes = container.querySelector("p");
    const btn = container.querySelector("#decrement");
    act(() => {
        btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(numlikes.textContent).toBe("Likes: -1");
  });
});
