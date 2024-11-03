'use strict';

const course = {
    get: async (req, res) => {
        try {
            const data = [];
            res.render('index', {
                body: 'course',
                data
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching data');
        }
    },
    post: async (req, res) => {
        try {
            const data = [];
            res.render('index', {
                body: 'course',
                data
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching data');
        }
    }
}
module.exports = course