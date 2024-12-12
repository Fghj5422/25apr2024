function popup(link, windowName) {
  var width = 500;
  var height = 500;
  var left = (screen.width - width) / 2;
  var top = (screen.height - height) / 2;
  var features = 'width=' + width + ', height=' + height + ', left=' + left + ', top=' + top + ', scrollbars=yes';
  var url = link.href;
  var result = window.open(url, windowName, features);
  return false;
}
