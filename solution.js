function filter_list(l) {
    var list = l;
    const result = list.filter(bill => Number.isInteger(bill));
    return result;
  };
