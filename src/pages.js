module.exports = {

    index(request, response) {
        //return response.sendFile(path.join(__dirname, 'views', 'index.html'))
        return response.render('index')
    },

    orphanage(request, response) {
        return response.render('orphanage')
    },

    orphanages(request, response) {
        return response.render('orphanages')
    },

    createOrphanage(request, response) {
        return response.render('create-orphanage')
    }

};