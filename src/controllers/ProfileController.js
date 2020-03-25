const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        //get logged ngo
        const ngo_id = request.headers.authorization;

        //retrieve all of its incidents
        const incidents = await connection('incidents')
            .where('ngo_id', ngo_id)
            .select('*');

        return response.json(incidents);
    }

};