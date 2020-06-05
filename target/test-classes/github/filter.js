function(response) {
    var aa = [];
    for(i = 0; i<response.length; i++) {
        if(response[i].size==0) {
            aa.push({name: response[i].name, size: response[i].size, id: response[i].id, owner: response[i].owner});
        }
    }
    return aa;
}
