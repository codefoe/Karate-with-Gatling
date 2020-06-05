var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "18",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "423",
        "ko": "102"
    },
    "maxResponseTime": {
        "total": "5153",
        "ok": "4733",
        "ko": "5153"
    },
    "meanResponseTime": {
        "total": "1423",
        "ok": "1289",
        "ko": "2628"
    },
    "standardDeviation": {
        "total": "1277",
        "ok": "962",
        "ko": "2526"
    },
    "percentiles1": {
        "total": "1173",
        "ok": "1173",
        "ko": "2628"
    },
    "percentiles2": {
        "total": "1579",
        "ok": "1550",
        "ko": "3890"
    },
    "percentiles3": {
        "total": "4754",
        "ok": "2258",
        "ko": "4900"
    },
    "percentiles4": {
        "total": "5073",
        "ok": "4238",
        "ko": "5102"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5,
        "percentage": 25
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 20
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 9,
        "percentage": 45
    },
    "group4": {
        "name": "failed",
        "count": 2,
        "percentage": 10
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.333",
        "ok": "1.2",
        "ko": "0.133"
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
        "total": "102",
        "ok": "423",
        "ko": "102"
    },
    "maxResponseTime": {
        "total": "1027",
        "ok": "1027",
        "ko": "102"
    },
    "meanResponseTime": {
        "total": "621",
        "ok": "678",
        "ko": "102"
    },
    "standardDeviation": {
        "total": "306",
        "ok": "266",
        "ko": "0"
    },
    "percentiles1": {
        "total": "475",
        "ok": "483",
        "ko": "102"
    },
    "percentiles2": {
        "total": "958",
        "ok": "1008",
        "ko": "102"
    },
    "percentiles3": {
        "total": "1026",
        "ok": "1026",
        "ko": "102"
    },
    "percentiles4": {
        "total": "1027",
        "ok": "1027",
        "ko": "102"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 40
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
        "total": "0.667",
        "ok": "0.6",
        "ko": "0.067"
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
        "ok": "9",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "1318",
        "ok": "1318",
        "ko": "5153"
    },
    "maxResponseTime": {
        "total": "5153",
        "ok": "4733",
        "ko": "5153"
    },
    "meanResponseTime": {
        "total": "2225",
        "ok": "1900",
        "ko": "5153"
    },
    "standardDeviation": {
        "total": "1372",
        "ok": "1016",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1598",
        "ok": "1560",
        "ko": "5153"
    },
    "percentiles2": {
        "total": "1813",
        "ok": "1788",
        "ko": "5153"
    },
    "percentiles3": {
        "total": "4964",
        "ok": "3568",
        "ko": "5153"
    },
    "percentiles4": {
        "total": "5115",
        "ok": "4500",
        "ko": "5153"
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
        "count": 9,
        "percentage": 90
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 10
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.667",
        "ok": "0.6",
        "ko": "0.067"
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
