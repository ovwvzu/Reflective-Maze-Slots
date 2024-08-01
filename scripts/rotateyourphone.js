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
        rotateDiv.style.position = 'fixed';
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
            <div style="display: flex; flex-direction: column; align-items: center;">
                <img src="img/rotate.png" style="width: 300px; height: 300px; margin-bottom: 20px;" />
                <span>Please rotate the screen to landscape mode</span>
            </div>
        `;
    } else {
        rotateDiv.innerHTML = '';
        rotateDiv.removeAttribute('style');
    }
}
