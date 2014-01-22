precision highp float;
attribute vec3 a_position;
varying vec3 v_position;
uniform mat4 u_projectionMatrix;
void main(void) 
{
	v_position = a_position;
	gl_Position = u_projectionMatrix * vec4(a_position, 1.); 
}

