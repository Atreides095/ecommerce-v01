const imgBuilder = (img, size, square = false) => {
    const base = 'https://img.computerunivers.net/images';

    if (square) return `${base}/${size}x${size}${img}`;
    if (!square) return `${base}/${size}${img}`;
};

export default imgBuilder;
