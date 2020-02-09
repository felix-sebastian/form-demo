export default (
  storeType,
  user,
  metroDetails,
  role,
  date,
  victoria,
  suburb
) => {
  if (storeType === null) return 1;
  if (user === null) return 1;
  if (storeType === 1 && !metroDetails) return 1;
  if (victoria === 0 && !suburb) return 2;
  return null;
};
