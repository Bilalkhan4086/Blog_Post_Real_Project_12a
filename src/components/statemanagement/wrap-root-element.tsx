import React from "react"
import { Provider } from "react-redux"
import store from "../../store/Store"

export const wrapRootElement:React.FC<any> = ({ element }) => {
  return (
    <Provider store={store}>
      {element}
    </Provider>
  )
}