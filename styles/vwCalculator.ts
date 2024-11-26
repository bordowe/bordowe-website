const breakpoint = {
    mobile: 320,
    largeMobile: 480,
    tablet: 768,
    smallDesktop: 1024,
    desktop: 1280,
    largeDesktop: 1440,
}

type Device = keyof typeof breakpoint

function VC(size: number, device: Device): string | number {
    if (breakpoint.hasOwnProperty(device)) {
        return (size / breakpoint[device]) * 100 + "vw"
    } else {
        return 0
    }
}

export default VC
