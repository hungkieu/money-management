const ccl = (obj) => {
  return Object.keys(obj).reduce((current, className) => {
    return obj[className] ? [ ...current, className] : current;
  }, []).join(' ');
}

export default ccl;
