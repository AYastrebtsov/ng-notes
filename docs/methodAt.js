// eslint-disable-next-line no-extend-native
Array.prototype.at = function (index=0 ){
  let element
  if(index >= 0 && index <= this.length-1){
    element = this[index]
  }else if(index< 0 && (index * -1 <= this.length)){
    element = this[this.length + index]
  }else{
    element = undefined
  }
  return element
}
// eslint-disable-next-line no-extend-native
String.prototype.at = function (index=0){
  let element
  if(index >= 0 && index <= this.length-1){
    element = this[index]
  }else if(index< 0 && (index * -1 <= this.length)){
    element = this[this.length + index]
  }else{
    element = undefined
  }
  return element
}
