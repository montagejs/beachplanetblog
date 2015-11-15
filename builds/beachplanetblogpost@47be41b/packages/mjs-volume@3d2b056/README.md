mjs-volume
==========

This repository is the home of the [MontageJS](http://www.montagejs.org) 3D components. It currently provides one WebGL-accelerated user interface component called SceneView and a number of runtime components that expose various elements in a 3D scene. More components are planned, so follow or star mjs-volume to keep up with the latest developments.

## Introducing the SceneView Component

The SceneView component is designed to help front-end web developers and designers build interactive 3D experiences in the browser using their existing HTML, CSS, and JavaScript skills. Using the component, you can integrate a 3D scene in a MontageJS web application, manipulate individual elements of a 3D scene using CSS, and animate elements of a 3D scene using the same method that you would use to perform CSS transitions.

Features include:

* Support for 3D scene display in [glTF](https://github.com/KhronosGroup/glTF) format.
* Easy assignment of view points.
* Play, pause, and stop animations from its associated Scene component.

## Adding SceneView to a Project

The MontageJS 3D components are not part of the dependencies installed when you create a new project using the minit command line tool. To use the MontageJS 3D components, you have to add them to your MontageJS project:

1. In your MontageJS project directory, open the package.json file.

2. Add mjs-volume to the dependencies:

    ```text
    ...
    "dependencies": {
        "montage": "~0.13.9",
        "digit": "~0.4.0",
        "mjs-volume" : "git://github.com/fabrobinet/mjs-volume.git"
    },
    ...
    ``` 
3. Open a Terminal window, switch (cd) to your project directory, and type:

    ```text
    npm install
    ```
    
4. Press return to add the module

## Using the SceneView Component

The SceneView component displays content in a JSON-based media type format called <a href="http://www.khronos.org/gltf" target="_blank">OpenGL Transmission Format</a> (glTF). In order for 3D assets to be displayed by the SceneView component, you first have to convert the assets to glTF.


### Converting 3D Assets to glTF

Converting 3D assets to glTF is a two-step process:

1. Export the assets from a 3D authoring tool to the COLLADA interchange format.
2. Convert the output to a glTF model using the open source <a href="http://www.khronos.org/gltf" target="_blank">COLLADA-to-glTF</a> command line tool.

    >**Note:** The COLLADA working group also provides binaries for the COLLADA-to-glTF converter for <a href="http://collada.org/public_files/glTF/77abd641d1fb1105da6172f039e2007999a6c47d/collada2gltf" target="_blank">OS X</a> and <a href="http://collada.org/public_files/glTF/77abd641d1fb1105da6172f039e2007999a6c47d/collada2gltf.exe" target="_blank">Windows</a>. Download the binary for your operating system and copy it to the /usr/local/bin/ directory.

    For example, to convert a COLLADA file named foo.dae to glTF, open a Terminal window, switch (cd) to the directory that contains the COLLADA file, and enter:

    ```text
    collada2gltf -f foo.dae
    ```

    This creates a file called foo.json along with its companion files (binary data and shaders).
    
### Adding Assets to a Project

To use the converted assets in a project, place the folder that contains the assets in the assets folder of your MontageJS project.

## Importing and Displaying 3D Models

After your 3D assets have been converted and placed in your project directory, you can create a 3D scene.

### Displaying a 3D Scene

To import and display a Scene, follow these steps:

1. Declare an instance of the Scene runtime component in your template.
2. Assign it to a SceneView.

#### Creating a Scene

For improved maintainability, you may want to place your 3D scene inside a new ui component in your project directory (`minit create:component -n name`).

To create a scene, expose the Scene runtime component in the template's [declaration](http://montagejs.org/docs/serialization-format.html), and set its path to the glTF asset, for example:

```
"fooScene": {
     "prototype": "mjs-volume/runtime/scene",
      "properties": {
          "path": "/assets/foo.json"
      }
},
```

#### Assigning a Scene

To assign a Scene to a SceneView user interface component, create a reference to the scene in the declaration:

```
"sceneView": {
    "prototype": "mjs-volume/ui/scene-view.reel",
    "properties": {
        "element": { "#": "sceneView" },
        "scene": { "@": "fooScene" },
        }
    }
}
```

## Using the Runtime Components

The MontageJS 3D runtime components can be used just like regular MontageJS user interface components:

* They can be declared in your template.
* They can be styled via the `classList` property using CSS rules (as demoed in this [blog](http://montagejs.org/blog/2014/01/22/build-3d-applications-with-montagejs/).

The mjs-volume module provides a series of components that extend the Component3D runtime component such as Node and Material.

### Supported CSS Features

While we do have plans to extend CSS support, we also want to keep to what's essential. The following list of supported CSS features will grow in time, but don't expect the full set of CSS specs implemented (it would make sense anyways):

Transitions:

* timingFunction: `ease`, `linear`, `ease-in`, `ease-out` `ease-in-out`

Properties supported by **Node**:

* tranform: `rotateX`, `rotateY`, `rotateZ`, `rotate3d`, `scaleX`, `scaleY`, `scaleZ`, `translateX`, `translateY`, `translateZ`
* transform-origin
* visibility: `hidden`, `visible`
* -montage-transform-z-origin (to extend transform origin 3d content with depth)

Properties supported by **Material**:

>**Note:**  will soon add ability to set images/color here.

* opacity

## API

### Scene

### SceneView

#### scene

The scene property 

#### viewPoint:

#### play:

#### pause:

#### stop:

#### automaticallyCyclesThroughViewPoints

#### allowsProgressiveSceneLoading

#### allowsViewPointControl

### Node

### Material
