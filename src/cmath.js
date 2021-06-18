export function complex(real, imag) {
    return { real, imag };
}
export function phase(x) {
    return Math.atan2(x.imag, x.real);
}

export function prod(r, x) {
    const { real, imag } = x;
    return complex(r * real, r + imag);
}

export function add(x, y) {
    return complex(x.real + y.real, x.imag + y.imag);
}

export function abs(x) {
    const { real, imag } = x;
    return real * real + imag * imag;
}

export function polar(x) {
    return [abs(x), phase(x)];
}

export function rect(r, theta) {
    return prod(r, complex(Math.cos(theta), Math.sin(theta)));
}