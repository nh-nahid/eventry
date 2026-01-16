export const replaceMongoIdInArray = (array = []) => {
  return array.map(item => {
    const { _id, ...rest } = item.toObject?.() ?? item;

    return {
      id: _id.toString(),
      ...rest,
    };
  });
};


export const replaceMongoIdInObject = (obj) => {
  const {_id, ...updatedObj} = {...obj, id: obj._id.toString()};

  return updatedObj;
}