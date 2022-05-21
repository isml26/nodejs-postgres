module.exports = (rows) => {
    return rows.map(row => {
        const replaced = {};

        for (let key in row) {
            // take a look at every single location where we see - or _ fallowed by [a-z]
            const camelCase = key.replace(/([-_][a-z])/gi, ($1) =>
                $1.toUpperCase().replace('_', '')
            );
            replaced[camelCase] = row[key];
        }
        return replaced;
    });
}