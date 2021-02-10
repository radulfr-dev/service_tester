const { app, BrowserWindow } = require('electron')
const path = require('path');
const ServicesController = require(path.join(__dirname,'/controllers/servicesController.js'));
console.log(ServicesController);

console.log(path.join(__dirname,'/controllers/servicesController.js'));

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})


if(ServicesController !== undefined){
    let interval = setInterval(function(){
        console.log(ServicesController.selectRandomSupplier());
    }, 1000);
}


