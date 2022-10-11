
exports.letFilter = (queries, attributes, defaultFilter ) => {

    for (let item of attributes) {

        if (queries[item]) {

            defaultFilter[item] = queries[item]
        }
    }

    return {filter: defaultFilter}
}