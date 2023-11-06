const express = require('express');
const app = express();
const port = process.env.port || 3000; // You can choose any port you prefer

// Define dummy data for user analytics 
// change happen
const userInfo = [
    {
        totalVisit: 6300,
        totalSUbscriber: 32,
        activeUser: 20,
        totalClick: 199,
        incremnetVister: "+1.29%",
        iecrementSubrciber: "+1.29%"
    }
];

// Create a route to get user info data
app.get('/api/user-info', (req, res) => {
    res.json(userInfo);
});
// Define duumy data for userTrafic
const userTraffic = [
    {
        month: "january",
        userSignUp: 10,
        userSubscribed: 20
    },
    {
        month: "Febuary",
        userSignUp: 10,
        userSubscribed: 20
    },
    {
        month: "March",
        userSignUp: 10,
        userSubscribed: 20
    },
    {
        month: "April",
        userSignUp: 10,
        userSubscribed: 20
    },
    {
        month: "May",
        userSignUp: 10,
        userSubscribed: 20
    },
    {
        month: "June",
        userSignUp: 10,
        userSubscribed: 20
    },
    {
        month: "July",
        userSignUp: 10,
        userSubscribed: 20
    },
    {
        month: "August",
        userSignUp: 10,
        userSubscribed: 20
    },
    {
        month: "September",
        userSignUp: 10,
        userSubscribed: 20
    },
    {
        month: "Octomber",
        userSignUp: 10,
        userSubscribed: 20
    },
    {
        month: "November",
        userSignUp: 10,
        userSubscribed: 20
    },
    {
        month: "December",
        userSignUp: 10,
        userSubscribed: 20
    }
]
// Create a route to get userTraffic data
app.get('/api/user-traffic', (req, res) => {
    res.json(userTraffic);
});

// Define dummy data for Location

const userLocation = [
    {
        Day: "Mo",
        Country: "20",
        city: "30"
    },
    {
        Day: "Tu",
        Country: "20",
        city: "30"
    },
    {
        Day: "We",
        Country: "20",
        city: "30"
    },
    {
        Day: "Th",
        Country: "20",
        city: "30"
    },
    {
        Day: "Fr",
        Country: "20",
        city: "30"
    },
    {
        Day: "Sa",
        Country: "20",
        city: "30"
    },
    {
        Day: "Su",
        Country: "20",
        city: "30"
    }
]


// Create a route to get userLocation data
app.get('/api/user-location', (req, res) => {
    res.json(userLocation);
});




// Define dummy data for website analytics
const ConversationData = [
    {
        totalUserVisit: '3,124,213 users',
        totalUserVisitChange: 583,
        userSignUp: '1,523,151 users',
        userSubscribed: '948,213 users',

    }
];

// Create a route to get website analytics data
app.get('/api/user-conversation', (req, res) => {
    res.json(ConversationData);
});

// Start the server
app.listen(port, () => {
    console.log(`Dummy User Analytics and Website Analytics API is running on port ${port}`);
});
