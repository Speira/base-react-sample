#modules

Modules are separated logic, a bundle can have its own components, containers
functions and hooks. They tend to follow the namespace pattern.
One logic cannot call another, they can only share data to each other
through contexts (src/contexts).

Each module exposes some containers that can be called by src/App.js
