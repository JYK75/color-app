const componentToHex = (value:number) => {
  let hex = value.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

const rgbToHex = (arr:number[]) => {
  return '#' + componentToHex(arr[0]) + componentToHex(arr[1]) + componentToHex(arr[2]);
}

export default rgbToHex;