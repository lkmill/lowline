# lowline

Identical API to lodash but smallest possible footprint.

## Why?

LoDash is king in Node, but Node and browser environments have different
bottlenecks. In Node, effeciency is far more important than library footprint.
Since the server needs to handle many requests effeciently, and does not need
to download any libraries. Meanwhile, the browser only needs to handle one
client but all modules need to be downloaded.

Lowline is meant to be a subset of LoDash. Simply replace lowline with lodash
on the server.

Lowline does not aim to be backwards compatible; the main goal is to make each
isolated module and the package as a whole as light as possible.

## Condtional Exports

Are only available (because of patterns) in Node ^12.20, ^14.13 and >=15.
