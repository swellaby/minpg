import * as path from 'path';
import * as glob from 'glob';
import * as electron from 'electron';
import * as electronDebug from 'electron-debug';

const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

let mainWindow = null;

function createWindow() {
    const windowOptions: electron.BrowserWindowConstructorOptions = {
        width: 1080,
        minWidth: 680,
        height: 840,
        title: app.getName()
    };

    if (process.platform === 'linux') {
        windowOptions.icon = path.join(__dirname, '/assets/app-icon/png/512.png');
    }

    mainWindow = new BrowserWindow(windowOptions);

    mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', () => {
    electronDebug({showDevTools: true});
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});