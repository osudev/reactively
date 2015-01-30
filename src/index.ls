{DOM} = require 'react'

tag = (name) -> (...args) ->
  if args[0]?.constructor is Object
    attributes = args.shift()
  else
    attributes = {}
  DOM[name](attributes, ...args)

for tagName of DOM
  exports[tagName] = tag tagName
