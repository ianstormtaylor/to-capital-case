describe('to-capital-case', function () {

var assert = require('assert');
var capital = require('to-capital-case');

it('shouldnt touch capital case', function () {
  assert('A Capital Case String' == capital('A Capital Case String'));
});

it('should convert space case', function () {
  assert('A Space Case String' == capital('a space case string'));
});

it('should convert camel case', function () {
  assert('A Camel Case String' == capital('aCamelCaseString'));
});

it('should convert snake case', function () {
  assert('A Snake Case String' == capital('a_snake_case_string'));
});

it('should convert dot case', function () {
  assert('A Dot Case String' == capital('a.dot.case.string'));
});

it('should convert title case', function () {
  assert('A Title: Case Of String' == capital('A Title: Case of String'));
});

it('should convert constant case', function () {
  assert('A Constant Case String' == capital('A_CONSTANT_CASE_STRING'));
});

});