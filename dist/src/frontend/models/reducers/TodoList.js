"use strict";
/********************************************************************************
*                                                                               *
*   Redux Reducers and React Context API Provider/Consumer for state TodoList   *
*   Generated by ts2redux at 2018-10-20T14:02:55.174Z                           *
*   From Source file ../TodoList.ts                                             *
*                                                                               *
********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
/**
 * @redux true
 */
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.items = [];
        this.state = 'UNDEFINED';
    }
    TodoList.prototype.clearTodoList = function () {
        this.items = [];
    };
    TodoList.prototype.reverse = function () {
        this.items.reverse();
    };
    TodoList.prototype.sortById = function () {
        this.items.sort(function (a, b) { return a.id - b.id; });
    };
    TodoList.prototype.sortByTitle = function () {
        this.items.sort(function (a, b) { return a.title.localeCompare(b.title); });
    };
    TodoList.prototype.sortByCompletion = function () {
        var toNumber = function (value) { return value ? 1 : 0; };
        this.items.sort(function (a, b) { return toNumber(a.completed) - toNumber(b.completed); });
    };
    /**
     * Fetch items from json placeholder service
     */
    TodoList.prototype.getItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.state === 'RUNNING')
                            return [2 /*return*/];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        this.state = 'RUNNING';
                        _a = this;
                        return [4 /*yield*/, axios_1.default.get('https://jsonplaceholder.typicode.com/todos')];
                    case 2:
                        _a.items = (_b.sent()).data;
                        this.state = 'LOADED';
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        this.state = 'ERROR';
                        this.stateError = e_1;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return TodoList;
}());
exports.TodoList = TodoList;
var immer = require("immer");
var react_redux_1 = require("react-redux");
var React = require("react");
exports.mapStateToProps = function (state) {
    return {
        items: state.TodoList.items,
        state: state.TodoList.state,
        stateError: state.TodoList.stateError,
    };
};
exports.mapDispatchToProps = function (dispatch) {
    return {
        clearTodoList: function () {
            return dispatch(RTodoList.clearTodoList());
        },
        reverse: function () {
            return dispatch(RTodoList.reverse());
        },
        sortById: function () {
            return dispatch(RTodoList.sortById());
        },
        sortByTitle: function () {
            return dispatch(RTodoList.sortByTitle());
        },
        sortByCompletion: function () {
            return dispatch(RTodoList.sortByCompletion());
        },
        getItems: function () {
            return dispatch(RTodoList.getItems());
        },
    };
};
exports.StateConnector = react_redux_1.connect(exports.mapStateToProps, exports.mapDispatchToProps);
var init_TodoList = function () {
    var o = new TodoList();
    return {
        items: o.items,
        state: o.state,
        stateError: o.stateError,
    };
};
/**
 * @generated true
 */
var RTodoList = /** @class */ (function () {
    function RTodoList(state, dispatch, getState) {
        this._state = state;
        this._dispatch = dispatch;
        this._getState = getState;
    }
    Object.defineProperty(RTodoList.prototype, "items", {
        get: function () {
            if (this._getState) {
                return this._getState().TodoList.items;
            }
            else {
                return this._state.items;
            }
        },
        set: function (value) {
            if (this._state) {
                this._state.items = value;
            }
            else {
                // dispatch change for item items
                this._dispatch({ type: exports.TodoListEnums.TodoList_items, payload: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RTodoList.prototype, "state", {
        get: function () {
            if (this._getState) {
                return this._getState().TodoList.state;
            }
            else {
                return this._state.state;
            }
        },
        set: function (value) {
            if (this._state) {
                this._state.state = value;
            }
            else {
                // dispatch change for item state
                this._dispatch({ type: exports.TodoListEnums.TodoList_state, payload: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RTodoList.prototype, "stateError", {
        get: function () {
            if (this._getState) {
                return this._getState().TodoList.stateError;
            }
            else {
                return this._state.stateError;
            }
        },
        set: function (value) {
            if (this._state) {
                this._state.stateError = value;
            }
            else {
                // dispatch change for item stateError
                this._dispatch({ type: exports.TodoListEnums.TodoList_stateError, payload: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    // is a reducer
    RTodoList.prototype.clearTodoList = function () {
        if (this._state) {
            this.items = [];
        }
        else {
            this._dispatch({ type: exports.TodoListEnums.TodoList_clearTodoList });
        }
    };
    RTodoList.clearTodoList = function () {
        return function (dispatcher, getState) {
            (new RTodoList(null, dispatcher, getState)).clearTodoList();
        };
    };
    // is a reducer
    RTodoList.prototype.reverse = function () {
        if (this._state) {
            this.items.reverse();
        }
        else {
            this._dispatch({ type: exports.TodoListEnums.TodoList_reverse });
        }
    };
    RTodoList.reverse = function () {
        return function (dispatcher, getState) {
            (new RTodoList(null, dispatcher, getState)).reverse();
        };
    };
    // is a reducer
    RTodoList.prototype.sortById = function () {
        if (this._state) {
            this.items.sort(function (a, b) { return a.id - b.id; });
        }
        else {
            this._dispatch({ type: exports.TodoListEnums.TodoList_sortById });
        }
    };
    RTodoList.sortById = function () {
        return function (dispatcher, getState) {
            (new RTodoList(null, dispatcher, getState)).sortById();
        };
    };
    // is a reducer
    RTodoList.prototype.sortByTitle = function () {
        if (this._state) {
            this.items.sort(function (a, b) { return a.title.localeCompare(b.title); });
        }
        else {
            this._dispatch({ type: exports.TodoListEnums.TodoList_sortByTitle });
        }
    };
    RTodoList.sortByTitle = function () {
        return function (dispatcher, getState) {
            (new RTodoList(null, dispatcher, getState)).sortByTitle();
        };
    };
    // is a reducer
    RTodoList.prototype.sortByCompletion = function () {
        if (this._state) {
            var toNumber_1 = function (value) { return value ? 1 : 0; };
            this.items.sort(function (a, b) { return toNumber_1(a.completed) - toNumber_1(b.completed); });
        }
        else {
            this._dispatch({ type: exports.TodoListEnums.TodoList_sortByCompletion });
        }
    };
    RTodoList.sortByCompletion = function () {
        return function (dispatcher, getState) {
            (new RTodoList(null, dispatcher, getState)).sortByCompletion();
        };
    };
    // is task
    /**
     * Fetch items from json placeholder service
     */
    RTodoList.prototype.getItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.state === 'RUNNING')
                            return [2 /*return*/];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        this.state = 'RUNNING';
                        _a = this;
                        return [4 /*yield*/, axios_1.default.get('https://jsonplaceholder.typicode.com/todos')];
                    case 2:
                        _a.items = (_b.sent()).data;
                        this.state = 'LOADED';
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _b.sent();
                        this.state = 'ERROR';
                        this.stateError = e_2;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RTodoList.getItems = function () {
        return function (dispatcher, getState) {
            (new RTodoList(null, dispatcher, getState)).getItems();
        };
    };
    return RTodoList;
}());
exports.RTodoList = RTodoList;
exports.TodoListEnums = {
    TodoList_items: 'TodoList_items',
    TodoList_state: 'TodoList_state',
    TodoList_stateError: 'TodoList_stateError',
    TodoList_clearTodoList: 'TodoList_clearTodoList',
    TodoList_reverse: 'TodoList_reverse',
    TodoList_sortById: 'TodoList_sortById',
    TodoList_sortByTitle: 'TodoList_sortByTitle',
    TodoList_sortByCompletion: 'TodoList_sortByCompletion',
};
exports.TodoListReducer = function (state, action) {
    if (state === void 0) { state = init_TodoList(); }
    return immer.produce(state, function (draft) {
        switch (action.type) {
            case exports.TodoListEnums.TodoList_items:
                (new RTodoList(draft)).items = action.payload;
                break;
            case exports.TodoListEnums.TodoList_state:
                (new RTodoList(draft)).state = action.payload;
                break;
            case exports.TodoListEnums.TodoList_stateError:
                (new RTodoList(draft)).stateError = action.payload;
                break;
            case exports.TodoListEnums.TodoList_clearTodoList:
                (new RTodoList(draft)).clearTodoList();
                break;
            case exports.TodoListEnums.TodoList_reverse:
                (new RTodoList(draft)).reverse();
                break;
            case exports.TodoListEnums.TodoList_sortById:
                (new RTodoList(draft)).sortById();
                break;
            case exports.TodoListEnums.TodoList_sortByTitle:
                (new RTodoList(draft)).sortByTitle();
                break;
            case exports.TodoListEnums.TodoList_sortByCompletion:
                (new RTodoList(draft)).sortByCompletion();
                break;
        }
    });
};
/***************************
* React Context API test   *
***************************/
exports.TodoListContext = React.createContext(null);
exports.TodoListConsumer = exports.TodoListContext.Consumer;
var instanceCnt = 1;
var TodoListProvider = /** @class */ (function (_super) {
    __extends(TodoListProvider, _super);
    function TodoListProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.state = init_TodoList();
        _this.__devTools = null;
        _this.clearTodoList = _this.clearTodoList.bind(_this);
        _this.reverse = _this.reverse.bind(_this);
        _this.sortById = _this.sortById.bind(_this);
        _this.sortByTitle = _this.sortByTitle.bind(_this);
        _this.sortByCompletion = _this.sortByCompletion.bind(_this);
        _this.getItems = _this.getItems.bind(_this);
        var devs = window['devToolsExtension'] ? window['devToolsExtension'] : null;
        if (devs) {
            _this.__devTools = devs.connect({ name: 'TodoList' + instanceCnt++ });
            _this.__devTools.init(_this.state);
            _this.__devTools.subscribe(function (msg) {
                if (msg.type === 'DISPATCH' && msg.state) {
                    _this.setState(JSON.parse(msg.state));
                }
            });
        }
        return _this;
    }
    TodoListProvider.prototype.componentWillUnmount = function () {
        if (this.__devTools)
            this.__devTools.unsubscribe();
    };
    TodoListProvider.prototype.clearTodoList = function () {
        var nextState = immer.produce(this.state, function (draft) { return (new RTodoList(draft)).clearTodoList(); });
        if (this.__devTools)
            this.__devTools.send('clearTodoList', nextState);
        this.setState(nextState);
    };
    TodoListProvider.prototype.reverse = function () {
        var nextState = immer.produce(this.state, function (draft) { return (new RTodoList(draft)).reverse(); });
        if (this.__devTools)
            this.__devTools.send('reverse', nextState);
        this.setState(nextState);
    };
    TodoListProvider.prototype.sortById = function () {
        var nextState = immer.produce(this.state, function (draft) { return (new RTodoList(draft)).sortById(); });
        if (this.__devTools)
            this.__devTools.send('sortById', nextState);
        this.setState(nextState);
    };
    TodoListProvider.prototype.sortByTitle = function () {
        var nextState = immer.produce(this.state, function (draft) { return (new RTodoList(draft)).sortByTitle(); });
        if (this.__devTools)
            this.__devTools.send('sortByTitle', nextState);
        this.setState(nextState);
    };
    TodoListProvider.prototype.sortByCompletion = function () {
        var nextState = immer.produce(this.state, function (draft) { return (new RTodoList(draft)).sortByCompletion(); });
        if (this.__devTools)
            this.__devTools.send('sortByCompletion', nextState);
        this.setState(nextState);
    };
    /**
     * Fetch items from json placeholder service
     */
    TodoListProvider.prototype.getItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                (new RTodoList(null, function (action) {
                    var nextState = exports.TodoListReducer(_this.state, action);
                    if (_this.__devTools)
                        _this.__devTools.send(action.type, nextState);
                    _this.setState(nextState);
                }, function () { return ({ TodoList: _this.state }); })).getItems();
                return [2 /*return*/];
            });
        });
    };
    TodoListProvider.prototype.render = function () {
        return (React.createElement(exports.TodoListContext.Provider, { value: __assign({}, this.state, { clearTodoList: this.clearTodoList, reverse: this.reverse, sortById: this.sortById, sortByTitle: this.sortByTitle, sortByCompletion: this.sortByCompletion, getItems: this.getItems }) },
            " ",
            this.props.children));
    };
    return TodoListProvider;
}(React.Component));
exports.TodoListProvider = TodoListProvider;
//# sourceMappingURL=TodoList.js.map