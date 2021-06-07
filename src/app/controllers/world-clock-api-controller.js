const axios = require('axios').default;
const config = require("../../config/app");

class WorldClockApiController {
    constructor() {
        // Set axios base url to point to World Clock Api
        axios.defaults.baseURL = config.worldClockApiBaseUrl;
    }
    //Make a GET request to World Clock Api
    async getTime(req, res) {
        try {
            // Extract time reference of path (now, tomorrow, yesterday)
            const timeReference = req.path.split('/')[1];
            // Timezone passed on route parameters
            const timezone = req.params.timezone;
            // Axios request
            const response = await axios.get(`${timezone}/${timeReference}`);

            return res.status(response.status).json(response.data);
        } catch (error) {
            //Error handling
            return res.status(400).send(JSON.stringify(error));
        }
    }
}

module.exports = new WorldClockApiController();