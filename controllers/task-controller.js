const { json } = require('body-parser');
const cron = require('node-cron')

cron.schedule('*/30 * * * * *', () => {
    console.log(`Cron job triggered!!`);

    const mockReq = { query: {} }
    const mockRes = {
        status: (statusCode) => mockRes,
        json: (data) => console.log(data)
    }; 
    getDataCall(mockReq, mockRes); 
});

// GET Data Call 
const getDataCall = async(req, res) => {
    console.log(`getDataCalled!!`);
    try {
        // param data 
        const dataParams = {}

        for (const [key, value] of Object.entries(req.query)) {
            dataParams[key] = value
        }

        return res.status(200).json({
            Message: "GET API Response",
            data: dataParams, 
        }) 

    } catch (err) {
        return res.status(400).json({
            Message: "Error getting GET API Response",
            Error: err.message 
        })
    }
}

// POST JSON Data Call
const josnPostData = async(req, res) => {
    console.log(`jsonPostDataCalled!!`);
    try {
        // req body data 
        const reqBodyData = {}

        for (const [key, value] of Object.entries(req.body)) {
            reqBodyData[key] = value; 
        }

        return res.status(200).json({
            Message: "POST API Response JSON Data",
            data: reqBodyData
        })

    } catch (err) {
        console.error(`Error in JSON Data: ${err.message}`);
        return res.status(400).json({
            Message: "Error getting JOSN Data API Response",
            Error: err.message
        })
    }
}

// POST FORM Data Call
const formDataPost = async(req, res) => {

    try {
        const formData = {}

        for (const [key, value] of Object.entries(req.body)) {
            formData[key] = value; 
        }

        return res.status(200).json({
            Message: "POST API Response Form Data",
            data: formData 
        })

    } catch (err) {
        return res.status(400).json({
            Message: "Error getting Form Data API Response",
            Error: err.message
        })
    }
}

exports.getDataCall = getDataCall; 
exports.josnPostData = josnPostData; 
exports.formDataPost = formDataPost; 