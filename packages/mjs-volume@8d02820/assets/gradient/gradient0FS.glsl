precision highp float;
varying vec3 v_position;
uniform vec3 u_color0;
uniform vec3 u_color1;
void main(void) {
	float intensity = (v_position.y / 2.) + 0.5;

	vec3 color = mix(u_color0, u_color1, intensity);

	gl_FragColor = vec4(color,.7); 
}
