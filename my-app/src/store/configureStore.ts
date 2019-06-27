import {createStore} from "redux";
import { appReducers } from "./index";

export default function configureStore() {
  return createStore(appReducers, {});
}
