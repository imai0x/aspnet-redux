/*************************************************************************************
 *                                                                                    *
 *   Redux Reducers and React Context API Provider/Consumer for state UIHelperModel   *
 *   Generated by ts2redux from Source file ../UIHelper.ts                            *
 *                                                                                    *
 *************************************************************************************/

class UIHelperModel {
  showWasps = false;
  toggle() {
    this.showWasps = !this.showWasps;
  }
}

import * as immer from "immer";
import { connect } from "react-redux";
import { IState } from "./index";
import * as React from "react";

export interface IContainerPropsMethods {
  toggle: () => any;
}
export interface IUIHelperModel {
  showWasps: boolean;
}

export type IContainerPropsState = IUIHelperModel;
export interface IProps extends IContainerPropsState, IContainerPropsMethods {}
export const mapStateToProps = (state: IState): IContainerPropsState => {
  return {
    showWasps: state.UIHelperModel.showWasps
  };
};
export const mapDispatchToProps = (dispatch: any): IContainerPropsMethods => {
  return {
    toggle: () => {
      return dispatch(RUIHelperModel.toggle());
    }
  };
};
export const StateConnector = connect(
  mapStateToProps,
  mapDispatchToProps
);

const initUIHelperModel = () => {
  const o = new UIHelperModel();
  return {
    showWasps: o.showWasps
  };
};
const initWithMethodsUIHelperModel = () => {
  const o = new UIHelperModel();
  return {
    showWasps: o.showWasps,
    toggle: o.toggle
  };
};

/**
 * @generated true
 */
export class RUIHelperModel {
  private _state?: IUIHelperModel;
  private _dispatch?: (action: any) => void;
  private _getState?: () => any;
  constructor(
    state?: IUIHelperModel,
    dispatch?: (action: any) => void,
    getState?: () => any
  ) {
    this._state = state;
    this._dispatch = dispatch;
    this._getState = getState;
  }
  get showWasps(): boolean {
    if (this._getState) {
      return this._getState().UIHelperModel.showWasps;
    } else {
      if (this._state) {
        return this._state.showWasps;
      }
    }
    throw "Invalid State in UIHelperModel_showWasps";
  }
  set showWasps(value: boolean) {
    if (this._state && typeof value !== "undefined") {
      this._state.showWasps = value;
    } else {
      // dispatch change for item showWasps
      if (this._dispatch) {
        this._dispatch({
          type: UIHelperModelEnums.UIHelperModel_showWasps,
          payload: value
        });
      }
    }
  }

  toggle() {
    if (this._state) {
      this.showWasps = !this.showWasps;
    } else {
      if (this._dispatch) {
        this._dispatch({ type: UIHelperModelEnums.UIHelperModel_toggle });
      }
    }
  }

  public static toggle() {
    return (dispatcher: any, getState: any) => {
      new RUIHelperModel(undefined, dispatcher, getState).toggle();
    };
  }
}

export const UIHelperModelEnums = {
  UIHelperModel_showWasps: "UIHelperModel_showWasps",
  UIHelperModel_toggle: "UIHelperModel_toggle"
};

export const UIHelperModelReducer = (
  state: IUIHelperModel = initUIHelperModel(),
  action: any
) => {
  return immer.produce(state, draft => {
    switch (action.type) {
      case UIHelperModelEnums.UIHelperModel_showWasps:
        new RUIHelperModel(draft).showWasps = action.payload;
        break;
      case UIHelperModelEnums.UIHelperModel_toggle:
        new RUIHelperModel(draft).toggle();
        break;
    }
  });
};
/********************************
 * React Context API component   *
 ********************************/
export const UIHelperModelContext = React.createContext<IProps>(
  initWithMethodsUIHelperModel()
);
export const UIHelperModelConsumer = UIHelperModelContext.Consumer;
let instanceCnt = 1;
export class UIHelperModelProvider extends React.Component {
  public state: IUIHelperModel = initUIHelperModel();
  public lastSetState: IUIHelperModel;
  private __devTools: any = null;
  constructor(props: any) {
    super(props);
    this.lastSetState = this.state;
    this.toggle = this.toggle.bind(this);
    const devs = window["devToolsExtension"]
      ? window["devToolsExtension"]
      : null;
    if (devs) {
      this.__devTools = devs.connect({ name: "UIHelperModel" + instanceCnt++ });
      this.__devTools.init(this.state);
      this.__devTools.subscribe((msg: any) => {
        if (msg.type === "DISPATCH" && msg.state) {
          this.setState(JSON.parse(msg.state));
        }
      });
    }
  }
  public componentWillUnmount() {
    if (this.__devTools) {
      this.__devTools.unsubscribe();
    }
  }
  public setStateSync(state: IUIHelperModel) {
    this.lastSetState = state;
    this.setState(state);
  }
  toggle() {
    const nextState = immer.produce(this.state, draft =>
      new RUIHelperModel(draft).toggle()
    );
    if (this.__devTools) {
      this.__devTools.send("toggle", nextState);
    }
    this.setStateSync(nextState);
  }
  public render() {
    return (
      <UIHelperModelContext.Provider
        value={{ ...this.state, toggle: this.toggle }}
      >
        {" "}
        {this.props.children}
      </UIHelperModelContext.Provider>
    );
  }
}
