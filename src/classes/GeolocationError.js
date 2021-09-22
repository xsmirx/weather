export class GeolocationError extends Error {
  constructor(message) {
    super(message);
    this.name = "Geolocation Error";
    this.message = message || "Geolocation data not found";
  }
}
