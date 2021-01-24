const rtl = (state = false, action: any) => {
  console.log(action.type);
  switch (action.type) {
    case "@rtl/TOGGLE_RTL":
      state = action.toggle;
      return state;

    default:
      return state;
  }
};

export default rtl;
