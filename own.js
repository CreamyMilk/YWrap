let baseURL = "https://auth.gandalf.network"

let config = {
    publicKey: '0x026336a5b48e82e8764217f252b730cf1f90807055b7afd201e3ceb62d39813846',
    redirectUrl: 'https://blastscan.io/',
    services: {'youtube':true}
}

let connectURL = `${baseURL}?services=${JSON.stringify(config.services)}&redirectUrl=${config.redirectUrl}&publicKey=${config.publicKey}`




console.log("🔗",connectURL)