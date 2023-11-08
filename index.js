const express = require('express');
const app = express();
const port = process.env.port || 3000; // You can choose any port you prefer

// Define dummy data for user analytics 
// change happen
const userInfo = [
    {
        id: 1,
        name: 'Total visits',
        numb: 6300,
        increment: '+1.29%',
        ImgUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB3SURBVHgBlc7bDYAgDAXQ1kncTDdwBFzBDRxBJ3AEHcFNsE0kIQ30cZP7UeAAAMHknCdqKsNCvaijE5YkqIY1ADmzCzfhv6HiLrSwCjVswh52wRZ2Q4lDUOA7BAWOQQrySbH2UE/D7Yj49l62cvANA3WDePh38AGcBINIU+rfsQAAAABJRU5ErkJggg==",
        color: '#3f46f7',
        incrementColor: 'green',
        incrementBg: '#163241'
    },
    {
        id: 2,
        name: 'Total Subscriber',
        numb: 32,
        increment: '+1.29%',
        ImgUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADfSURBVHgBtVJtEcIwDG05BBQFFAdzAA5AAg5AAihgDpgDcDAJm4MxBZ2DktylRy/rFz/27t4laz7al0yKP2CtVWA0cJJSfvBsnUiqyG49X1EaFu9cgQY+gR3Q2HJo16DOJA7ANnB+dBIa4J6e1hNHsqh1guRGzLERhYO7eLe+PL8uKdZMiiaLeOeKlZeMqOjcvWLA71WiBz5Rk3+HWfTkj2SVKNXNYmfLVxnQbXzdLH7iq0zpPkQucLjy4MML3kRcopmtkuluRQL292fWRbojMnCYincM6s6COnYp3YvhC2AnqJv/6IC3AAAAAElFTkSuQmCC",
        color: '#fe8743',
        incrementColor: 'red',
        incrementBg: '#371436'
    },
    {
        id: 3,
        name: 'Active user',
        numb: 20,
        ImgUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB3SURBVHgB7ZRvCsAgCMVfnaT7Xypv4jZoIyK1NWQE/aAP+VDx9QcoMHO+FgSmdS4oia/0CCdiGYGbzrnaq7pEkMYLJ3chTa8b1nE/K+DELrxAYemejxQmI5Y6ejIfiIWUv+bhUSdO+MjjY/uJjPKrx4Q5C6gXOwBFOIF6IXZ9kgAAAABJRU5ErkJggg==",
        color: '#00c543'
    },
    {
        id: 4,
        name: 'Total click',
        numb: 199,
        ImgUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFkSURBVHgBtZWLbYNADIZNlAEYgRHoBtcJygawQbsBjMAGzQZpJ2AERqAbkA1cWzHBOHcHEuSXrAgf/vArALBBiFjgXQ0cJYJlZFcBd3wNeyXQEZ/lYI8IcBFQyzBuhVx/wx6pFjhYVpHCHhGgEvAo/WUr4QhJ+bbPx8DVQ6a16wLn2dS20wqoJhvIPgLnOQ+SrOeqyDWQdaH7daBDv0o5vwTOHaxJBjhIAGf2ZUofPOActgjn7WiMP5WHLbQGewxCANyWNAAddVUxaI7zitWecwvNJZFFq2JQtHDT13FTPw2Ug68aHoLivJYt2o3wQDPx65UaPdACl6qiUOljCJ6r2MoLjkB7k3lrMi3XwL2nfP2Pe/hVljX7Y2B+V/yS/ZC9k908M2VopfrJL6AGVnROkqSRIF5+DnqL3P9J5mCDznjf0YysINv3ZdBgycDBwTrBi8RgPbA/+bVDHDz+m4mZxC98+AcNFBDD3vVxKQAAAABJRU5ErkJggg==",
        color: '#8923d9'
    },
];

// Create a route to get user info data
app.get('/api/user-info', (req, res) => {
    res.json(userInfo);
});
// Define duumy data for userTrafic
const userTraffic = {
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    userSubscribedData: [-50, 10, 0, -20, 0, 0, -70, 0, 0, 0, -90, 0],
    userSignupData: [0, 0, 150, 0, 110, 90, 0, 165, 90, 60, 0, 100],
    lineData: [-51, 11, 151, -21, 111, 91, -72, 166, 95, 65, -92, 105]
}


// Create a route to get userTraffic data
app.get('/api/user-traffic', (req, res) => {
    res.json(userTraffic);
});

// Define dummy data for Location

const userLocation = {
    Day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    countryData: [10, 20, 30, 40, 50, 60, 100],
    citydata: [80, 90, 100, 110, 120, 130, 240]
}




// Create a route to get userLocation data
app.get('/api/user-location', (req, res) => {
    res.json(userLocation);
});




// Define dummy data for website analytics
const ConversationData = {
    conversationName: ['Total User Visit', 'User Signup', 'User Subscribe'],
    conversationData: [12, 19, 3],
    totalUserVisit: '3,124,213 users',
    totalUserVisitChange: 583,
    userSignUp: '1,523,151 users',
    userSubscribed: '948,213 users',

}


// Create a route to get website analytics data
app.get('/api/user-conversation', (req, res) => {
    res.json(ConversationData);
});

// Start the server
app.listen(port, () => {
    console.log(`Dummy User Analytics and Website Analytics API is running on port ${port}`);
});
