// import { app, BrowserWindow } from 'electron'
// import path from 'path'
// import {JSDOM} from 'jsdom'
// // import ind from './js/preload'
// import {window} from new JSDOM();

const { app, BrowserWindow } = require('electron');
const path = require('path');
const {JSDOM} = require('jsdom');
// const ind = require('./js/preload');
const {window} = new JSDOM();

app.disableHardwareAcceleration();

const createWindow = () => {
    const win = new BrowserWindow({
        width: window.innerWidth,
        height: window.innerHeight, 
        // webPreferences: {
        //     preload: path.join(__dirname, "js/preload.js")
        // }
    })

    win.loadFile('src/index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows.length === 0) createWindow;
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})