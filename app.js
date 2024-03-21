// Import the library
import Connect from '@gandalf-network/connect'

// Initialize Connect
const connect = new Connect({
    publicKey: '0x026336a5b48e82e8764217f252b730cf1f90807055b7afd201e3ceb62d39813846',
    redirectUrl: 'https://blastscan.io/',
    services: {'netflix': true, 'playstation': false}
})

try {
// Generate the Connect URL
    const connectUrl = await connect.generateURL()

    // Use the URL as needed
    console.log('Generated Connect URL:', connectUrl)

    // If you want to display a QR Code instead:
    const qrCodeDataUrl = await connect.generateQRCode()
} catch (error) {
    // handle error
}
