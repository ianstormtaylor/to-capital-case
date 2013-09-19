describe('to-capital-case', function () {

var assert = require('assert');
var capital = require('to-capital-case');

it('space case', function () {
  assert('Space Case' == capital('space case'));
});

it('camelCase', function () {
  assert('Camel Case' == capital('camelCase'));
});

it('snake_case', function () {
  assert('Snake Case' == capital('snake_case'));
});

it('dot.case', function () {
  assert('Dot Case' == capital('dot.case'));
});

it('weird[case', function () {
  assert('Weird Case' == capital('weird[case'));
});

it('complexCamelCase', function () {
  assert('Complex Camel Case' == capital('complexCamelCase'));
});

it('complex.weird]case', function () {
  assert('Complex Weird Case' == capital('complex.weird]case'));
});

});