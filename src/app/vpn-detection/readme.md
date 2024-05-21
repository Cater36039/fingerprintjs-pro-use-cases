# VPN Detection and Location Spoofing Protection

In this use case demo, we use Fingerprint [VPN Detection](https://dev.fingerprint.com/docs/smart-signals-overview#vpn-detection-for-browsers) to detect visitors trying to spoof their location.

- The core of the use case is implemented in this [component](./VpnDetectionUseCase.tsx) and this [endpoint](./api/activate-ppp/route.ts).
- We are using [Sealed Client Results](https://dev.fingerprint.com/docs/sealed-client-results) to protect the Fingerprint integration from client-side tampering and reverse-engineering.

[🌍 VPN Detection Live Demo](https://demo.fingerprint.com/vpn-detection)  
[📖 VPN Detection Article](https://fingerprint.com/blog/vpn-detection-location-spoofing-fraud-prevention/)
