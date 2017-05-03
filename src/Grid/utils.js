export const hasOwnProperties = properties => object => {
  properties.every(property => object.hasOwnProperty(property));
}