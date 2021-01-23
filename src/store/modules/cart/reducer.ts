import produce from "immer";

export default function cart(
  state = [],
  action: { type?: any; id?: any; amount?: any; product?: any }
) {
  // eslint-disable-next-line consistent-return
  return produce(state, (draft: any) => {
    switch (action.type) {
      case "@cart/ADD_SUCCESS": {
        const { product } = action;
        draft.push(product);
        break;
      }
      case "@cart/REMOVE": {
        const productIndex = draft.findIndex(
          (p: { id: any }) => p.id === action.id
        );
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
        break;
      }
      case "@cart/UPDATE_AMOUNT_SUCCESS": {
        const productIndex = draft.findIndex(
          (p: { id: any }) => p.id === action.id
        );
        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
        break;
      }
      case "@cart/CHECKOUT": {
        draft.splice([]);
        break;
      }
      default:
        return state;
    }
  });
}
