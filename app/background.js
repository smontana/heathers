// This is main process of Electron, started as first thing when your
// app starts. This script is running through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.

import { app, Menu } from 'electron'
import createWindow from './helpers/window'

// Special module holding environment variables which you declared
// in config/env_xxx.json file.
import env from './env'

var mainWindow

app.on('ready', function () {
  var mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    titleBarStyle: 'hidden-inset',
    autoHideMenuBar: true
  })

  mainWindow.loadURL('file://' + __dirname + '/app.html')

  if (env.name !== 'production') {
    mainWindow.openDevTools()
  }
})

app.on('window-all-closed', function () {
  app.quit()
})
