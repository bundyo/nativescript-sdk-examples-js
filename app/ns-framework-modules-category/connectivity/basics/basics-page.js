// >> connectivity-require
const connectivityModule = require("tns-core-modules/connectivity");
// << connectivity-require

exports.onNavigatedTo = function (args) {
    const page = args.object;
    let connectionTypeString;

    // >> connectivity-type
    // result is ConnectionType enumeration (none, wifi or mobile)
    const connectionType = connectivityModule.getConnectionType();

    switch (connectionType) {
        case connectivityModule.connectionType.none:
            // Denotes no Internet connection.
            console.log("No connection");
            // >> (hide)
            connectionTypeString = "No Internet connectivity!";
            // << (hide)
            break;
        case connectivityModule.connectionType.wifi:
            // Denotes a WiFi connection.
            console.log("WiFi connection");
            // >> (hide)
            connectionTypeString = "WiFI connectivity!";
            // << (hide)
            break;
        case connectivityModule.connectionType.mobile:
            // Denotes a mobile connection, i.e. cellular network or WAN.
            console.log("Mobile connection");
            // >> (hide)
            connectionTypeString = "Mobile connectivity!";
            // << (hide)
            break;
        default:
            break;
    }
    // << connectivity-type

    // >> connectivity-monitoring
    connectivityModule.startMonitoring((newConnectionType) => {
        switch (newConnectionType) {
            case connectivityModule.connectionType.none:
                console.log("Connection type changed to none.");
                break;
            case connectivityModule.connectionType.wifi:
                console.log("Connection type changed to WiFi.");
                break;
            case connectivityModule.connectionType.mobile:
                console.log("Connection type changed to mobile.");
                break;
            default:
                break;
        }
    });

    // Explicitly stopping the monitoring
    connectivityModule.stopMonitoring();
    // << connectivity-monitoring

    page.bindingContext = { connectionType: connectionTypeString };
};
