import store from "../../store/Store"
const React = require("react")
const { Provider } = require("react-redux")

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      {element}
    </Provider>
  )
}