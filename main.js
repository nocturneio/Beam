const {app, BrowserWindow} = require('electron');

let win = null;

function createWindow() {
    win = new BrowserWindow({
        width: 900,
        height: 600,
        icon: './src/assets/beam_icon.png',
        title: 'Beam',
        center: true,
        frame: false
    });

    win.loadURL('http://localhost:3000');

    win.on('closed', function () {
        win = null;
    });
}


app.on('ready', function () {
    createWindow();
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});