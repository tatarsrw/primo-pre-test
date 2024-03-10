(function (window) {
  window.env = window.env || {};
  window['env']['web'] = '${web}';
  window['env']['debug'] = '${debug}';
  window['env']['version'] = '${version}';
})(this);
