var { generateOffice365Schedule } = require('./utils/schedule');
var { now } = require('./utils/dateHelper');

var express = require('express');

var app = express();
var port = 8080;

const cors = require('cors');
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

app.get('/availability', function (req, res) {
  // STEP 1 use a mock response and display on the client
  const response = generateMockUpResponse();

  // const startDate = req.params.startDate;
  // const endDate = req.params.endDate;
  // STEP 2 generate real data and convert to expected format
  // const data = generateOffice365Schedule(startDate, endDate);
  return res.send(response);
});

function generateMockUpResponse() {
  const d1 = now().set({ hour: 10 });
  const d2 = d1.plus({ hours: 1, days: 1 });

  return [
    {
      date: d1.toFormat('dd/MM/yyyy'),
      availableSlots: [
        { startTime: '9:00', endTime: '10:00' },
        { startTime: '10:00', endTime: '11:00' },
      ],
    },
    {
      date: d2.toFormat('dd/MM/yyyy'),
      availableSlots: [
        { startTime: '15:00', endTime: '16:00' },
        { startTime: '16:00', endTime: '17:00' },
      ],
    },
  ];
}

app.listen(port, () => console.log(`App listening on port ${port}!`));
