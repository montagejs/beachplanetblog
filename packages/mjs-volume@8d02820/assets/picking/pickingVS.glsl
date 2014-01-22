precision highp float;
attribute vec3 a_position;
uniform mat4 u_worldviewMatrix;
uniform mat4 u_projectionMatrix;
void main(void) {
vec4 pos = u_worldviewMatrix * vec4(a_position,1.0);
gl_Position = u_projectionMatrix * pos;
}
