const router = require('express').Router();

//Load controllers
const {
    addController,
    getController,
    getByIdController,
    updateController,
    deleteController
} = require('../controllers/place_controller')


router.route('/').get( // get places
    getController
);


router.route('/:id').get(// get place by id
    getByIdController
);

router.route('/add').post( // add place by id
    addController
);

router.route('/update/:id').post( // update place by id
    updateController
);

router.route('/delete/:id').delete( // delete place by id
    deleteController
);

module.exports = router;