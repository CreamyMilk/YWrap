let baseURL = "https://auth.gandalf.network"


function generateURL(config){
    let connectURL = `${baseURL}?services=${JSON.stringify(config.services)}&redirectUrl=${config.redirectUrl}&publicKey=${config.publicKey}`
    return connectURL
}

let youtubeConfig = {
    publicKey: '0x026336a5b48e82e8764217f252b730cf1f90807055b7afd201e3ceb62d39813846',
    redirectUrl: 'https://blastscan.io/',
    services: {'youtube':true}
}

let netflixConfig = {
    publicKey: '0x026336a5b48e82e8764217f252b730cf1f90807055b7afd201e3ceb62d39813846',
    redirectUrl: 'https://blastscan.io/',
    services: {'netflix':true}
}

let combinedConfig = {
    publicKey: '0x026336a5b48e82e8764217f252b730cf1f90807055b7afd201e3ceb62d39813846',
    redirectUrl: 'https://blastscan.io/',
    services: {'netflix':false,'youtube':true}
}


console.log("🔗 Netflix  : ",generateURL(netflixConfig))
console.log("🔗 YouTube  : ",generateURL(youtubeConfig))
console.log("🔗 Combined : ",generateURL(combinedConfig))