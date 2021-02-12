$(document).ready(() => {
    const before = $.get;
    const data = {
        "calls": [
            {
                "method": "GET",
                "endpoint": "/users",
                "status": "401"
            },
            {
                "method": "GET",
                "endpoint": "/users",
                "status": "200"
            },
            {
                "method": "GET",
                "endpoint": "/users",
                "status": "200"
            },
            {
                "method": "GET",
                "endpoint": "/users",
                "status": "200"
            },
            {
                "method": "POST",
                "endpoint": "/users",
                "status": "401"
            },
            {
                "method": "POST",
                "endpoint": "/users",
                "status": "401"
            },
            {
                "method": "POST",
                "endpoint": "/users",
                "status": "201"
            },
            {
                "method": "POST",
                "endpoint": "/users",
                "status": "201"
            },
            {
                "method": "DELETE",
                "endpoint": "/users",
                "status": "500"
            },
            {
                "method": "DELETE",
                "endpoint": "/users",
                "status": "500"
            },
            {
                "method": "DELETE",
                "endpoint": "/users",
                "status": "500"
            },
            {
                "method": "DELETE",
                "endpoint": "/users",
                "status": "200"
            },
            {
                "method": "GET",
                "endpoint": "/users",
                "status": "200"
            },
            {
                "method": "GET",
                "endpoint": "/users",
                "status": "200"
            },
            {
                "method": "POST",
                "endpoint": "/users",
                "status": "500"
            },
            {
                "method": "GET",
                "endpoint": "/users",
                "status": "500"
            },
            {
                "method": "DELETE",
                "endpoint": "/users",
                "status": "200"
            },
            {
                "method": "POST",
                "endpoint": "/users",
                "status": "201"
            },
            {
                "method": "GET",
                "endpoint": "/users/1",
                "status": "404"
            },
            {
                "method": "GET",
                "endpoint": "/users/1",
                "status": "404"
            },
            {
                "method": "GET",
                "endpoint": "/users/1",
                "status": "404"
            },
            {
                "method": "GET",
                "endpoint": "/users/2",
                "status": "200"
            },
            {
                "method": "GET",
                "endpoint": "/users/2",
                "status": "200"
            }
        ],
        "count": 23,
        "status": "200"
    };
    $.get = function(url, callback) {
        if (url === '/call.json') {
            callback(JSON.stringify(data));
        } else {
            before(url, callback);
        }
    }
});