// For help writing plugins, visit the documentation to get started:
//   https://support.insomnia.rest/article/173-plugins

// TODO: Add plugin code here...

module.exports.templateTags = [{
  name: 'jsFunction',
  displayName: 'JavaScript Function',
  description: 'Runs an input through a custom JS Function',
  args: [{
    displayName: 'Input',
    type: 'string',
  }, {
    displayName: 'Function',
    type: 'string',
  }],
  run(context, input, fnString) {
    const fn = eval(fnString);
    return fn(input);
  }
}]
