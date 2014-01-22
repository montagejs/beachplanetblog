Beach Planet Example
====================

The beach planet is a 3D environment developed to illustrate the use of the MontageJS 3D view component. This repository includes the 3D assets, a simple game that incorporates the beach planet, and several examples that demonstrate specific features of the 3D component.

The 3D view component, which you can find in [its own repository](https://github.com/fabrobinet/mjs-volume), provides a bridge between WebGL and the MontageJS data binding system, extending the model/view/controller paradigm to the world of 3D graphics. The bridge makes it easy to integrate a 3D scene that serves as a view, reacting to changes in an underlying data model. The component  gives developers the ability to manipulate individual parts of a 3D scene in WebGL using CSS, making it exceptionally easy to accomplish with a syntax that is already widely known. The component will even let you animate elements of a 3D scene using the exact same method that you would use to perform CSS transitions.

To learn more about the beach planet and the MontageJS 3D view component, you can refer to our [blog post](http://montagejs.org/blog/2014/01/22/build-3d-applications-with-montagejs/), which includes a complete tutorial.

Installation
============

To run the 3D examples in this repository, you will need to have the `npm` package manager and a web server. To install of the necessary library dependencies, run `npm install .` at the command line in the root directory.

After the dependencies have been installed, you will be able to run the content from a web server. It's important to note that you will not be able to view it locally from the "file://" protocol.

To streamline the content for deployment to a remote server, you can use the [mop utility](https://github.com/montagejs/mop).
