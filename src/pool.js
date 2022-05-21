const pg = require("pg");

// wrapping up this pool inside of class so we can very easily tell our pool
// connect to different database at somepoint time

class Pool {
    _pool = null;

    connect(options) {
        this._pool = new pg.Pool(options);
        return this._pool.query(`SELECT 1 + 1;`);
    }
    
    close(){
        return this._pool.end();
    }
    
    query(sql,params){
        return this._pool.query(sql,params);
    }
}

module.exports = new Pool();