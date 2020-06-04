var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "19",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "92",
        "ok": "402",
        "ko": "92"
    },
    "maxResponseTime": {
        "total": "1656",
        "ok": "1656",
        "ko": "92"
    },
    "meanResponseTime": {
        "total": "1006",
        "ok": "1054",
        "ko": "92"
    },
    "standardDeviation": {
        "total": "526",
        "ok": "494",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1195",
        "ok": "1358",
        "ko": "92"
    },
    "percentiles2": {
        "total": "1466",
        "ok": "1483",
        "ko": "92"
    },
    "percentiles3": {
        "total": "1644",
        "ok": "1644",
        "ko": "92"
    },
    "percentiles4": {
        "total": "1654",
        "ok": "1654",
        "ko": "92"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 8,
        "percentage": 40
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10,
        "percentage": 50
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 5
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.583",
        "ko": "0.083"
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
        "ok": "9",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "92",
        "ok": "402",
        "ko": "92"
    },
    "maxResponseTime": {
        "total": "1031",
        "ok": "1031",
        "ko": "92"
    },
    "meanResponseTime": {
        "total": "512",
        "ok": "558",
        "ko": "92"
    },
    "standardDeviation": {
        "total": "226",
        "ok": "187",
        "ko": "0"
    },
    "percentiles1": {
        "total": "458",
        "ok": "461",
        "ko": "92"
    },
    "percentiles2": {
        "total": "583",
        "ok": "595",
        "ko": "92"
    },
    "percentiles3": {
        "total": "870",
        "ok": "888",
        "ko": "92"
    },
    "percentiles4": {
        "total": "999",
        "ok": "1002",
        "ko": "92"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 8,
        "percentage": 80
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 10
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "0.75",
        "ko": "0.083"
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
        "total": "1358",
        "ok": "1358",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1656",
        "ok": "1656",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1501",
        "ok": "1501",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "109",
        "ok": "109",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1483",
        "ok": "1483",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1607",
        "ok": "1607",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1650",
        "ok": "1650",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1655",
        "ok": "1655",
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
