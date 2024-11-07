const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
  let allKeysExist = true;

  keys.map((key) => {
    if (!(key in obj)) {
      allKeysExist = false;
    }
  });
  return allKeysExist;
};
