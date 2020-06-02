var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "419",
        "ok": "419",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1843",
        "ok": "1843",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1127",
        "ok": "1127",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "513",
        "ok": "513",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1244",
        "ok": "1244",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1577",
        "ok": "1577",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1773",
        "ok": "1773",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1829",
        "ok": "1829",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 8,
        "percentage": 40
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10,
        "percentage": 50
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.667",
        "ko": "-"
    }
},
contents: {
"req_get--user-repos-f33c0": {
        type: "REQUEST",
        name: "GET /user/repos",
path: "GET /user/repos",
pathFormatted: "req_get--user-repos-f33c0",
stats: {
    "name": "GET /user/repos",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "419",
        "ok": "419",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1121",
        "ok": "1121",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "650",
        "ok": "650",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "percentiles1": {
        "total": "534",
        "ok": "534",
        "ko": "-"
    },
    "percentiles2": {
        "total": "734",
        "ok": "734",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1055",
        "ok": "1055",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1108",
        "ok": "1108",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 8,
        "percentage": 80
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 20
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "0.833",
        "ko": "-"
    }
}
    },"req_post--user-repo-b01c1": {
        type: "REQUEST",
        name: "POST /user/repos",
path: "POST /user/repos",
pathFormatted: "req_post--user-repo-b01c1",
stats: {
    "name": "POST /user/repos",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1367",
        "ok": "1367",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1843",
        "ok": "1843",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1605",
        "ok": "1605",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "148",
        "ok": "148",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1586",
        "ok": "1586",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1734",
        "ok": "1734",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1810",
        "ok": "1810",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1836",
        "ok": "1836",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "0.833",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
