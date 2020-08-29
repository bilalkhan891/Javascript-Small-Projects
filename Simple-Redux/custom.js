// Reducer
function counter(currentState, action) {
  var nextState = {
    count: currentState.count,
  };
  switch (action.type) {
    case "ADD":
      nextState.count = currentState.count + 1;
      return nextState;
      break;
    case "MINUS":
      nextState.count = currentState.count <= 0 ? 0 : currentState.count - 1;
      return nextState;
      break;
    case "RESET":
      nextState.count = 0;
      return nextState;
      break;
    default:
      return currentState;
      break;
  }
}
var state = { count: 0 };
var store = Redux.createStore(counter, state);
var counterEle = document.getElementById("counter");

console.log(store);

function render() {
  console.log("In Render");
  console.log(store.getState());
  state = store.getState();
  counterEle.innerHTML = state.count.toString();
}

store.subscribe(render);
// Action
document.getElementById("add").addEventListener("click", (e) => {
  store.dispatch({ type: "ADD" });
});
document.getElementById("minus").addEventListener("click", (e) => {
  store.dispatch({ type: "MINUS" });
});
document.getElementById("reset").addEventListener("click", (e) => {
  store.dispatch({ type: "RESET" });
});
