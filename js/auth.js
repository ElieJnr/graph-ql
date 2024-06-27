import { Getdata } from "./audit.js";
import { serveLogin } from "./connect.js";
import { displayName } from "./displayname.js";
import { serveUserPage } from "./templates.js";
import { fetchXp } from "./xpgraph.js";


export function auth() {
    const form = document.querySelector('.form_container');
    const emailField = form.querySelector('#email_field');
    const passwordField = form.querySelector('#password_field');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = emailField.value;
        const password = passwordField.value;

        authenticateUser(username, password);
    });
}

// const jwt = require('jsonwebtoken');

export function authenticateUser(username, password) {
    fetch('https://learn.zone01dakar.sn/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(username + ':' + password)
        },
        body: JSON.stringify({ username, password }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                let badPassword = document.querySelector('.badPassword')
                badPassword.style.display = 'block'
            } else {
                localStorage.setItem('authToken', data);
                fetchGraphQLData(data);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

export function fetchGraphQLData(token) {
    const query = `
{
  user {
    id
    firstName
    lastName
    login
    email
    auditRatio
    events(where: {eventId: {_eq: 56}}) {
      level
    }
  }
}
    `;

    fetch('https://learn.zone01dakar.sn/api/graphql-engine/v1/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ query }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.errors) {
                console.log('GraphQL Errors:', data.errors);
                serveLogin();
            } else {
                const user = data.data.user[0];

                getXp(token, user)
                setTimeout(() => {
                    fetchXp(token);
                    Getdata(token, user.login)
                    displayName(token);
                }, 2000)
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}


function getXp(token, user) {
    let query = `
    {
        transaction_aggregate(
            where: {transaction_type: {type: {_eq: "xp"}}, event: {path: {_eq: "/dakar/div-01"}}}
        ) {
            aggregate {
                sum {
                    amount
                }
            }
        }
        allProject: transaction(
            order_by: {createdAt: asc}
            where: {type: {_eq: "xp"}, eventId: {_eq: 56}, _and: [{path: {_nilike: "%checkpoint%"}}, {path: {_nilike: "%piscine-js-2%"}}]}
        ) {
            createdAt
            object {
                name
            }
        }
    }
    `
    fetch('https://learn.zone01dakar.sn/api/graphql-engine/v1/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ query }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                console.log('Erreur :', data.error);
            } else {
                if (data.data.allProject.length) {
                    serveUserPage(user, convert(data.data.transaction_aggregate.aggregate.sum.amount), data.data.allProject.length);
                } else {                    
                    localStorage.removeItem('authToken')
                    window.location.reload()
                }
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

export function convert(size) {
    const units = ['B', 'Kb', 'Mb', 'Gb', 'Tb'];
    let unitIndex = 0;

    while (size >= 1000 && unitIndex < units.length - 1) {
        size /= 1000;
        unitIndex++;
    }

    return `${size.toFixed(2)} ${units[unitIndex]}`;
}




//https://learn.zone01dakar.sn/api/auth/signin
