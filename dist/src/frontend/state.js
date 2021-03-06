"use strict";
/**
 * User Interface State
 *
 * Nice links btw.
 * https://github.com/gcanti/fp-ts/issues/251
 * https://jaysoo.ca/2017/05/10/learn-fp-with-react-part-2/
 */
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
function initializeShopCart() {
    return {
        items: []
    };
}
exports.initializeShopCart = initializeShopCart;
function updateItems(input, newItems) {
    return __assign({}, input, { items: newItems.slice() });
}
exports.updateItems = updateItems;
/**
 * @taskfor updateItems
 */
function fetchAll(dispatch) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, [{ name: 'foo' }, { name: 'bar' }]];
        });
    });
}
exports.fetchAll = fetchAll;
/**
 * @taskfor updateItems
 */
function getItemsFromCategory(id, dispatch) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, [{ name: 'foo' }, { name: 'bar' }]];
        });
    });
}
exports.getItemsFromCategory = getItemsFromCategory;
function AddItem(input, newItem) {
    return __assign({}, input, { items: input.items.concat([newItem]) });
}
exports.AddItem = AddItem;
/**
 * @taskfor AddItem
 */
function RequstAddNewItem(itemName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
                    name: itemName
                }];
        });
    });
}
exports.RequstAddNewItem = RequstAddNewItem;
/**
 * @taskfor AddItem
 */
function AnyFn(itemName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
                    name: itemName
                }];
        });
    });
}
exports.AnyFn = AnyFn;
function initUserModel() {
    return {
        logged: false
    };
}
exports.initUserModel = initUserModel;
function setUser(input, basicInfo) {
    return __assign({}, input, basicInfo);
}
exports.setUser = setUser;
/**
 * @taskfor setUser
 */
function loginUser(username, password) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
                    logged: false
                }];
        });
    });
}
exports.loginUser = loginUser;
/*

Yksi mahdollinen tapa voisi olla tehd?? async -funktio, jota kutsutaan ensin ja joka sitten
lopulta dispatch???? uuden UserInfoModel tuloksen...

export async function loginUser(username:string, password:string) : Promise<UserInfoModelMsg> {
  return {
     logged: false
  }
}
*/
/**
 *
 * @param username
 * @param password
 * @reduxfn true
 */
function loginUser2(username, password) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Do something and then return the data... 
            return [2 /*return*/, function (state) {
                    return {
                        logged: false
                    };
                }];
        });
    });
}
exports.loginUser2 = loginUser2;
/*
// Miten haluaisin kirjoittaa oikeasti...
class TestModel {

  private _items:ShopCartItem[]

  // These could be one variable ...
  private _addingItem = false
  private itemAddSuccess = false

  get addingItem():boolean {
    return this._addingItem;
  }

  set addingItem(v:boolean) {
    this._addingItem = v
  }

  async addItem(newItem:ShopCartItem) {
    // This would be dispatching some stuff...
    this.addingItem = true
    // this creates a reducer
    this.items.push( newItem )
    this.itemAddSuccess = true
  }

  get items():ShopCartItem[]  {
    return this.items;
  }
  set items(value:ShopCartItem[]) {
    this.items = value;
  }
}
*/
// this.items.push( ) --> 
// Would result as reducer for this.items.push( newItem )
//# sourceMappingURL=state.js.map