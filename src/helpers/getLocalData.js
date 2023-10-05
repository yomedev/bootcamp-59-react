export const getLocalData = ({ lsKey, key, defaultValue }) => {
  const localData = JSON.parse(localStorage.getItem(lsKey));
  if (!localData) {
    return defaultValue;
  }
  return localData[key] ? localData[key] : localData;
};
