"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const geocode_js_1 = __importDefault(require("./utils/geocode.js"));
const forecast_js_1 = __importDefault(require("./utils/forecast.js"));
const address = process.argv[2];
if (!address) {
    console.log('Please provide an address');
}
else {
    (0, geocode_js_1.default)(address, (error, data) => {
        if (error)
            return console.log(error);
        if (!data)
            return;
        (0, forecast_js_1.default)(data.latitude, data.longitude, (error, forecastData) => {
            if (error)
                return console.log(error);
            console.log(data.location);
            console.log(forecastData);
        });
    });
}
//# sourceMappingURL=app.js.map