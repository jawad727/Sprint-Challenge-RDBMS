const router = require('express').Router();

const ptDB = require('../helpers/Project-tracker-helper')


router.get('/project/:id', (req, res) => {
    const id = req.params.id

    ptDB
    .getById(id)

    .then(project => {

        if (project) {
            ptDB
            .getActionById(id)
            .then( actionsArray => {
                
                res.status(200).json({...project, actions: actionsArray})
            } )


        
    } else {
            res.status(404).json({
                error: 'Enter a valid id'
            })
        }

    })
    .catch(error => {
        res.status(500).json({
            error: 'Couldnt Get by id'
        })
    })
})



router.post('/project', (req, res) => {
    const projectbod = req.body;

    ptDB
    .addProjects(projectbod)

    .then(dish => {
        res.status(201).json(dish)
    })
    .catch(error => {
        res.status(400).json({
            error: "couldnt post"
        })
    })
})



router.post('/action', (req, res) => {
    const actionbod = req.body;

    ptDB
    .addActions(actionbod)

    .then(dish => {
        res.status(201).json(actionbod)
    })
    .catch(error => {
        res.status(400).json({
            error: "couldnt post"
        })
    })
})




module.exports = router;
