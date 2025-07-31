type GeocodeData = {
    latitude: number;
    longitude: number;
    location: string;
};
type GeocodeCallback = (error: string | undefined, data?: GeocodeData) => void;
declare const geocode: (address: string, callback: GeocodeCallback) => void;
export default geocode;
//# sourceMappingURL=geocode.d.ts.map