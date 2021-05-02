const router = require('express').Router();

//Load controllers
const {
    addController,
    getController,
    getByIdController,
    updateController,
    deleteController
} = require('../controllers/hotel_controller')


router.route('/').get( // get hotels
    getController
);

router.route('/:id').get( // get hotel by id
    getByIdController
);

router.route('/add').post( // add hotel
    addController
);

router.route('/update/:id').post( // update hotel by id
    updateController
);

router.route('/delete/:id').delete( // delete hotel by id
    deleteController
);

module.exports = router;