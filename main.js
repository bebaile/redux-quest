const initialState = 0;
const counterS = document.querySelector("#counter-render");
const incrementBtn = document.querySelector("#button-increment");
const decrementBtn = document.querySelector("#button-decrement");
const addTen = document.querySelector("#button-addTen");
const minusTen = document.querySelector("#button-minusTen");
const reset = document.querySelector("#button-reset");

const incrementAction = { type: "increment" };

const decrementAction = { type: "decrement" };

const addTenAction = { type: "addTen" };
const minusTenAction = { type: "minusTen" };
const resetAction = { type: "reset" };

const counterState = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "addTen":
      return state + 10;
    case "minusTen":
      return state - 10;
    case "reset":
      return initialState;
    case "default":
      return state;
  }
};

const { createStore } = Redux;
const store = createStore(counterState);

incrementBtn.addEventListener("click", () => {
  store.dispatch(incrementAction);
});
decrementBtn.addEventListener("click", () => {
  store.dispatch(decrementAction);
});

addTen.addEventListener("click", () => {
  store.dispatch(addTenAction);
});

minusTen.addEventListener("click", () => {
  store.dispatch(minusTenAction);
});

reset.addEventListener("click", () => {
  store.dispatch(resetAction);
});

const render = () => {
  counterS.innerText = store.getState();
};

store.subscribe(render);
