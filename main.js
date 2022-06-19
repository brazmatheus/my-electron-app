const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: '1vw',
        height: '1vh'
    })

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
})