/**
 * 动态创建iframe
 *
 * @param {String} id     iframe id
 * @param {string} url
 * @param {String} style
 * @returns  iframe
 */
function createIframe(id, url, style) {
  var iframe = document.createElement("iframe");
  iframe.id = id;
  iframe.style = style;
  iframe.src = url;
  return iframe;
}


function hasClass(ele,className) {
  return ele.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(ele.className);
}


export {
  createIframe
};
