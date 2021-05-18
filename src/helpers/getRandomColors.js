
function getRandomColors(n) {
    var letters = '0123456789ABCDEF'.split('');
    var colors = []
    for (var j = 0; j < n; j++) {
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        colors.push(color);
    }
    return colors
}

export default getRandomColors