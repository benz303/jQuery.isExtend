module('isType');

test('isElement', 2, function(){
  equals(jQuery.isElement(document.getElementById('qunit-header')), true, "$.isElement(document.getElementById('qunit-header')) return true");
  equals(jQuery.isElement(0), false, '$.isElement(0) return false');
});

test('isArray', 2, function(){
  equals(jQuery.isArray([]), true, "$.isArray([]) return true");
  equals(jQuery.isArray(''), false, "$.isArray('') return false");
});

test('isObject', 2, function(){
  equals(jQuery.isObject({}), true, "$.isObject({}) return true");
  equals(jQuery.isObject([]), false, "$.isObject([]) return false");
});

test('isArguments', 2, function(){
  (function(){
    equals(jQuery.isArguments(arguments), true, "$.isArguments(arguments) return true");
  })();
  equals(jQuery.isArguments([]), false, "$.isArguments([]) return false");
});

test('isFunction', 2, function(){
  equals(jQuery.isFunction(function(){}), true, "$.isFunction(function(){}) return true");
  equals(jQuery.isFunction([]), false, "$.isFunction([]) return false");
});

test('isString', 2, function(){
  equals(jQuery.isString(''), true, "$.isString('') return true");
  equals(jQuery.isString(0), false, '$.isString(0) return false');
});

test('isNumber', 2, function(){
  equals(jQuery.isNumber(0), true, "$.isNumber(0) return true");
  equals(jQuery.isNumber(''), false, "$.isNumber('') return false");
});

test('isNaN', 2, function(){
  equals(jQuery.isNaN(Number('a')), true, "$.isNaN(Number('a')) return true");
  equals(jQuery.isNaN(0), false, "$.isNaN(0) return false");
});

test('isDate', 2, function(){
  equals(jQuery.isDate(new Date()), true, "$.isDate(new Date()) return true");
  equals(jQuery.isDate(0), false, "$.isDate(0) return false");
});

test('isRegExp', 2, function(){
  equals(jQuery.isRegExp(/.*/), true, "$.isRegExp(/.*/) return true");
  equals(jQuery.isRegExp([]), false, "$.isRegExp([]) return false");
});

test('isNull', 2, function(){
  equals(jQuery.isNull(null), true, "$.isObject(null) return true");
  equals(jQuery.isNull(false), false, "$.isObject(false) return false");
});

test('isUndefined', 2, function(){
  equals(jQuery.isUndefined(undefined), true, "$.isUndefined(undefined) return true");
  equals(jQuery.isUndefined(false), false, "$.isUndefined(false) return false");
});

test('isjQuery', 2, function(){
  equals(jQuery.isjQuery(jQuery()), true, '$.isjQuery(jQuery()) return true');
  equals(jQuery.isjQuery(document.getElementById('qunit-header')), false, "$.isjQuery(document.getElementById('qunit-header')) return false");
});

test('isType(obj)', function(){
  equals(jQuery.isType(document.getElementById('qunit-header')), 'Element', "$.isType(document.getElementById('qunit-header')) return Element");
  equals(jQuery.isType([]), 'Array', "$.isType([]) return Array");
  equals(jQuery.isType({}), 'Object', "$.isType({}) return Object");
  (function(){
    equals(jQuery.isType(arguments), 'Arguments', "$.isType(arguments) return Arguments");
  })();
  equals(jQuery.isType(function(){}), 'Function', "$.isType(function(){}) return Function");
  equals(jQuery.isType(' '), 'String', "$.isType(' ') return String");
  equals(jQuery.isType(0), 'Number', "$.isType(0) return Number");
  equals(jQuery.isType(Number('a')), 'NaN', "$.isType(Number('a')) return NaN");
  equals(jQuery.isType(false), 'Boolean', "$.isType(false) return Boolean");
  equals(jQuery.isType(new Date()), 'Date', "$.isType(new Date()) return Date");
  equals(jQuery.isType(/.*/), 'RegExp', "$.isType(/.*/) return RegExp");
  equals(jQuery.isType(null), 'Null', "$.isType(null) return Null");
  equals(jQuery.isType(undefined), 'Undefined', "$.isType(undefined) return Undefined");
  equals(jQuery.isType(jQuery()), 'jQuery', "$.isType(jQuery()) return jQuery");
});

test('isType(obj, types)', function(){
  equals(jQuery.isType(jQuery(), 'jQuery'), true, "$.isType(jQuery(), 'jQuery') return true");
  equals(jQuery.isType(jQuery(), 'Object'), false, "$.isType(jQuery(), 'Object') return false");
  equals(jQuery.isType(jQuery(), ['jQuery', 'Object']), true, "$.isType(jQuery(), ['jQuery', 'Object']) return true");
  equals(jQuery.isType(jQuery(), ['Object', 'Array']), false, "$.isType(jQuery(), ['Object', 'Array']) return false");
});

module('isOther');

test('isEmpty', function(){
  equals(jQuery.isEmpty(document.getElementById('qunit-header')), false, "$.isEmpty(document.getElementById('qunit-header')) return false");
  equals(jQuery.isEmpty([]), true, "$.isEmpty([]) return true");
  equals(jQuery.isEmpty({}), true, "$.isEmpty({}) return true");
  (function(){
    equals(jQuery.isEmpty(arguments), true, "$.isEmpty(arguments) return true");
  })();
  equals(jQuery.isEmpty(function(){}), false, "$.isEmpty(function(){}) return false");
  equals(jQuery.isEmpty(' '), true, "$.isEmpty(' ') return true");
  equals(jQuery.isEmpty(0), false, "$.isEmpty(0) return false");
  equals(jQuery.isEmpty(Number('a')), true, "$.isEmpty(Number('a')) return true");
  equals(jQuery.isEmpty(false), false, "$.isEmpty(false) return false");
  equals(jQuery.isEmpty(new Date()), false, "$.isEmpty(new Date()) return false");
  equals(jQuery.isEmpty(/.*/), false, "$.isEmpty(/.*/) return false");
  equals(jQuery.isEmpty(null), true, "$.isEmpty(null) return true");
  equals(jQuery.isEmpty(undefined), true, "$.isEmpty(undefined) return true");
  equals(jQuery.isEmpty(jQuery()), true, "$.isEmpty(jQuery()) return true");
  
  equals(jQuery.isEmpty, jQuery.isBlank, "$.isBlank is $.isEmpty");
});
