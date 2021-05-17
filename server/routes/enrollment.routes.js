const {Router} = require( 'express')
const authCtrl = require( '../controllers/auth.controllers')
const userCtrl = require('../controllers/user.controllers')
const courseCtrl = require('../controllers/course.controller')
const enrollmentCtrl = require('../controllers/enrollment.controller')
const router = Router()

router.route('/api/enrollment/new/:courseId')
    .post(authCtrl.requireSignin,enrollmentCtrl.findEnrollment, enrollmentCtrl.create )

router.route('/api/enrollment/:enrollmentId')
    .get(authCtrl.requireSignin,  enrollmentCtrl.isStudent, enrollmentCtrl.read)


router.route('/api/enrollment/complete/:enrollmentId')
    .put(authCtrl.requireSignin, enrollmentCtrl.isStudent, enrollmentCtrl.complete)

router.route('/api/enrollment/enrolled')
    .get(authCtrl.requireSignin, enrollmentCtrl.listEnrolled)

router.route('/api/enrollment/stats/:courseId')
    .get(enrollmentCtrl.enrollmentStats)

router.param('enrollmentId', enrollmentCtrl.enrollmentByID)
router.param('courseId', courseCtrl.courseByID)
router.param('userId', userCtrl.userByID)

module.exports = router