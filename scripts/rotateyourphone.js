var rotate_shown = false;
document.body.innerHTML = '<div id="rf_rotate"></div>';
_rf_checkratio();
window.onresize = function(event) {
    _rf_checkratio();
};
window.addEventListener("orientationchange", function() {
    _rf_checkratio();
});

function _rf_checkratio() {
    let ratio = window.innerWidth / window.innerHeight;
    if (ratio <= 1 && !rotate_shown) {
        rotate_shown = true;
        _rf_rotate('show');
    }
    if (ratio > 1 && rotate_shown) {
        rotate_shown = false;
        _rf_rotate('hide');
    }
}

function _rf_rotate(e) {
    const rotateDiv = document.getElementById('rf_rotate');
    if (e === 'show') {
        rotateDiv.style.width = '100%';
        rotateDiv.style.height = '100%';
        rotateDiv.style.position = 'absolute';
        rotateDiv.style.top = '0';
        rotateDiv.style.left = '0';
        rotateDiv.style.opacity = '0.8';
        rotateDiv.style.backgroundColor = 'black';
        rotateDiv.style.color = 'white';
        rotateDiv.style.display = 'flex';
        rotateDiv.style.flexDirection = 'column';
        rotateDiv.style.alignItems = 'center';
        rotateDiv.style.justifyContent = 'center';
        rotateDiv.style.textAlign = 'center';
        rotateDiv.style.fontSize = '24px';
        rotateDiv.innerHTML = `
            <img src="rotate.png" style="width: 300px; height: 300px; margin-bottom: 20px;" />
            Please rotate the screen to landscape mode
        `;
    } else {
        rotateDiv.style.removeProperty('width');
        rotateDiv.style.removeProperty('height');
        rotateDiv.style.removeProperty('position');
        rotateDiv.style.removeProperty('top');
        rotateDiv.style.removeProperty('left');
        rotateDiv.style.removeProperty('opacity');
        rotateDiv.style.removeProperty('backgroundColor');
        rotateDiv.style.removeProperty('color');
        rotateDiv.style.removeProperty('display');
        rotateDiv.style.removeProperty('flexDirection');
        rotateDiv.style.removeProperty('alignItems');
        rotateDiv.style.removeProperty('justifyContent');
        rotateDiv.style.removeProperty('textAlign');
        rotateDiv.style.removeProperty('fontSize');
        rotateDiv.innerHTML = '';
    }
}
