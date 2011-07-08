// codes from underscore,js v1.1.6

// Is a given value a DOM element?
jQuery.isElement = function(obj){
  return !!(obj && obj.nodeType == 1);
};

// Is a given value an array?
// Delegates to ECMA5's native Array.isArray
jQuery.isArray = Array.isArray || function(obj){
  return toString.call(obj) === '[object Array]';
};

// Is a given variable an object?
jQuery.isObject = function(obj){
  return obj === Object(obj) && jQuery.isArray(obj) === false && jQuery.isArguments(obj) === false && jQuery.isFunction(obj) === false && jQuery.isDate(obj) === false && jQuery.isRegExp(obj) === false && jQuery.isjQuery(obj) === false;
};

// Is a given variable an arguments object?
jQuery.isArguments = function(obj){
  return !!(obj && hasOwnProperty.call(obj, 'callee'));
};

// Is a given value a function?
jQuery.isFunction = function(obj){
  return !!(obj && obj.constructor && obj.call && obj.apply);
};

// Is a given value a string?
jQuery.isString = function(obj){
  return !!(obj === '' || (obj && obj.charCodeAt && obj.substr));
};

// Is a given value a number?
jQuery.isNumber = function(obj){
  return !!(obj === 0 || (obj && obj.toExponential && obj.toFixed));
};

// Is the given value `NaN`?
jQuery.isNaN = function(obj){
  if(jQuery.isBoolean(obj)){
    return false;
  }
  return obj !== obj;
};

// Is a given value a boolean?
jQuery.isBoolean = function(obj){
  return obj === true || obj === false;
};

// Is a given value a date?
jQuery.isDate = function(obj){
  return !!(obj && obj.getTimezoneOffset && obj.setUTCFullYear);
};

// Is the given value a regular expression?
jQuery.isRegExp = function(obj){
  return !!(obj && obj.test && obj.exec && (obj.ignoreCase || obj.ignoreCase === false));
};

// Is a given value equal to null?
jQuery.isNull = function(obj){
  return obj === null;
};

// Is a given variable undefined?
jQuery.isUndefined = function(obj){
  return obj === void 0;
};

jQuery.isjQuery = function(obj){
  return !!obj.jquery;
}

jQuery.isType = function(obj, types){
  var return_name = true;
  switch(true){
    case jQuery.isString(types):
      types = [types];
      return_name = false;
      break;
    case jQuery.isArray(types):
      return_name = false;
      break;
    default:
      var types = ['Element', 'Array', 'Object', 'Arguments', 'Function', 'String', 'Number', 'NaN', 'Boolean', 'Date', 'RegExp', 'Null', 'Undefined', 'jQuery'];
      break;
  }
  for(i in types){
    if(jQuery['is' + types[i]](obj)){
      return return_name ? types[i] : true;
    }
  }
  return return_name ? 'Unknown' : false;
}

// Is a given array or object empty?
jQuery.isEmpty = function(obj){
  switch(jQuery.isType(obj)){
    case 'Element':
    case 'Function':
    case 'Number':
    case 'Boolean':
    case 'Date':
    case 'RegExp':
      return false;
      break;
    case 'NaN':
    case 'Null':
    case 'Undefined':
      return true;
      break;
    case 'Array':
    case 'jQuery':
    case 'Arguments':
      return obj.length === 0;
      break;
    case 'Object':
      for(var key in obj){
        if(hasOwnProperty.call(obj, key)){
          return false;
        }
      }
      return true;
      break;
    case 'String':
      return jQuery.trim(obj) === '';
      break;
    default:
      return false;
      break;
  }
};
jQuery.isBlank = jQuery.isEmpty;
