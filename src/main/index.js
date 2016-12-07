// Native
import path from 'path'

// Packages
import {app, Tray, Menu, BrowserWindow, dialog} from 'electron'
import Config from 'electron-config'
import isDev from 'electron-is-dev'
import fixPath from 'fix-path'
import {resolve as resolvePath} from 'app-root-path'

// Ours
import scan from './actions/scan'
import toggleWindow from './utils/toggle-window'
import urlUtil from './utils/url'
import dockerfileUtil from './utils/dockerfile'

const isPlatform = name => {
  let handle

  switch (name) {
    case 'windows':
      handle = 'win32'
      break
    case 'macOS':
      handle = 'darwin'
      break
    default:
      handle = name
  }

  return process.platform === handle
}

const showError = (detail, win) => {
  dialog.showMessageBox(win || null, {
    type: 'error',
    message: 'An Error Occurred',
    detail,
    buttons: []
  })
}

// Prevent garbage collection
// Otherwise the tray icon would randomly hide after some time
let tray = null

// Hide dock icon before the app starts
if (isPlatform('macOS')) {
  app.dock.hide()
}

// Define the application name
app.setName('eyes')

// Make app start automatically on login
if (!isDev) {
  app.setLoginItemSettings({
    openAtLogin: true
  })
}

// Makes sure where inheriting the correct path
// Within the bundled app, the path would otherwise be different
fixPath()

// Make sure that unhandled errors get handled
process.on('uncaughtException', err => {
  console.error(err)
  showError('Unhandled error appeared', app)
})

const config = new Config()

const onboarding = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 250,
    title: 'welcome to eyes',
    resizable: true,
    center: true,
    frame: isPlatform('windows'),
    show: false,
    fullscreenable: false,
    maximizable: false,
    titleBarStyle: 'hidden-inset',
    backgroundColor: '#000'
  })

  win.loadURL('file://' + resolvePath('../app/pages/main.html'))

  win.on('close', event => {
    if (process.env.FORCE_CLOSE) {
      return
    }

    win.hide()
    event.preventDefault()
  })

  // return window instance
  return win
}

app.on('window-all-closed', () => {
  if (!isPlatform('macOS')) {
    app.quit()
  }
})

const isScanable = async item => {
  return item != null
}

const fileDropped = async (event, files) => {
  event.preventDefault()
  console.log(`File dropped: ${files}`)
  if (!files || files.length != 1 || !files[0]) {
    console.log(`${files} not supported`)
    return
  }


  var filePath = files[0]
  dockerfileUtil.isDockerFile(filePath).then(isDockerFile => {
    if (isDockerFile) {
      scan(filePath)
    } else {
      console.log(`${filePath} is not a valid DockerFile`)
    }
  }, error => {
    console.error(error)
  })
}

const textDropped = async (event, text) => {
  event.preventDefault()
  console.log(urlUtil)
  var isUrl = urlUtil.isUrl(text)
  console.log(`Text dropped: url? ${isUrl}, ${text}`)
  if (isUrl) {
    scan(text)
  }
}

const somethingDropped = async (event) => {
  event.preventDefault()

  console.log(`Something dropped: ${event}`)
}

app.on('ready', async () => {
  try {
    tray = new Tray(resolvePath('/assets/icons/iconTemplate.png'))
    global.tray = tray
  } catch (err) {
    showError('Could not spawn tray item', err)
    return
  }

  const windows = {
    mainWindow: onboarding()
  }

  const toggleContextMenu = async () => {
    let generatedMenu = [
      {
        label: windows.mainWindow.isVisible() ? 'Hide window' : 'Show Window',
        click: () => {toggleWindow(null, windows.mainWindow)}
      },
      {
        type: 'separator'
      },
      {
        label: 'Quit',
        click: app.quit,
        role: 'quit'
      }
    ]

    const menu = Menu.buildFromTemplate(generatedMenu)
    tray.popUpContextMenu(menu)
  }

  // When quitting the app, force close the mainWindow
  app.on('before-quit', () => {
    process.env.FORCE_CLOSE = true
  })

  // Define major event listeners for tray
  tray.on('drop-files', fileDropped)
  tray.on('drop-text', textDropped)
  tray.on('drop', somethingDropped)
  tray.on('click', toggleContextMenu)
})
