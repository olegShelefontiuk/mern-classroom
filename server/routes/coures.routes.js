const {Router} = require( 'express')
const authCtrl = require( '../controllers/auth.controllers')
const userCtrl = require('../controllers/user.controllers')
const courseCtrl = require('../controllers/course.controller')


const router = Router()
router.route('/api/courses/published')
    .get(courseCtrl.listPublished)
router.route('/api/courses/by/:userId')
    .post(authCtrl.requireSignin, courseCtrl.create)
    .get(authCtrl.requireSignin, courseCtrl.listByInstructor)

router.route('/api/courses/photo/:courseId')
    .get(courseCtrl.photo, courseCtrl.defaultPhoto)

router.route('/api/courses/defaultphoto')
    .get(courseCtrl.defaultPhoto)

router.route('/api/courses/:courseId')
    .get(courseCtrl.read)
    .put(authCtrl.requireSignin, courseCtrl.isInstructor,
        courseCtrl.update)
    .delete(authCtrl.requireSignin, courseCtrl.isInstructor, courseCtrl.remove)

router.route('/api/courses/:courseId/lesson/new')
    .put(authCtrl.requireSignin, courseCtrl.isInstructor,
        courseCtrl.newLesson)

router.param('courseId', courseCtrl.courseByID)
router.param('userId', userCtrl.userByID)

module.exports = router