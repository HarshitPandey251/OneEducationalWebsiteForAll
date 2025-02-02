const express = require('express');
const authRouter = express.Router();
const { studentSignUp, teacherSignUp, studentLogin, teacherLogin, studentForgotPassword, teacherForgotPassword } = require('./../controllers/auth');

//Tags
/**
 * @swagger
 * tags: 
 *     name: Auth
 *     description: The auth managing API
 * 
 */

// AuthRoutes
/**
 * @swagger
 * /student-signup:
 *  post:
 *     description: student signup route
 *     tags: [Auth]
 *     requestBody:
 *        required: true
 *        content: 
 *            application/json: 
 *                schema:
 *                    $ref: '#/components/schemas/Student'
 *     responses:
 *        '200':
 *            summary: Student Registered Successfully (token sent)
 *            content:
 *               application/json:
 *                   schema: 
 *                      type: object  
 *                      properties:
 *                           accesstoken: 
 *                                type: string
 *                                description: accesstoken for student to access platform for a week           
 *        '500':
 *            summary: Internal Error/ Email already registered
 *            content:
 *               application/json:        
 *                    schema: 
 *                       type: object  
 *                       properties:
 *                             error: 
 *                                 type: string
 *                                 description: error message if email already registered or internal error accures
 */
authRouter.post('/student-signup', studentSignUp);

/**
 * @swagger
 * /teacher-signup:
 *  post:
 *     description: teacher signup route
 *     tags: [Auth]
 *     requestBody:
 *        required: true
 *        content: 
 *            application/json: 
 *                schema:
 *                    $ref: '#/components/schemas/Teacher'
 *     responses:
 *        '200':
 *            summary: Teacher Registered Successfully (token sent)
 *            content:
 *               application/json:        
 *                    schema: 
 *                       type: object  
 *                       properties:
 *                          accesstoken: 
 *                             type: string
 *                             description: accesstoken for teacher to access platform for a week             
 *        '500':
 *            summary: Internal Error/ Email already registered
 *            content:
 *               application/json:        
 *                    schema: 
 *                       type: object  
 *                       properties:
 *                              error: 
 *                                  type: string
 *                                  description: error message if email already registered or internal error accures
 */
authRouter.post('/teacher-signup', teacherSignUp); 

/**
 * @swagger
 * /student-login:
 *  post:
 *     description: student login route
 *     tags: [Auth]
 *     requestBody:
 *        required: true
 *        content: 
 *            application/json: 
 *                schema:
 *                    type: object  
 *                    properties:
 *                          email: 
 *                              type: string
 *                              description: email entered for login
 *                          password: 
 *                               type: string 
 *                               description: password entered for login
 *     responses:
 *        '200':
 *            summary: Student Logged in Successfully (token sent)
 *            content:
 *               application/json:
 *                   schema: 
 *                      type: object  
 *                      properties:
 *                           accesstoken: 
 *                                type: string
 *                                description: accesstoken for student to access platform for a week 
 *        '400': 
 *            summary: Invalid Credentials
 *            content:
 *               application/json:        
 *                    schema: 
 *                       type: object  
 *                       properties:
 *                             error: 
 *                                 type: string
 *                                 description: error message for Invalid Credentials
 *        '401': 
 *           summary: Student not found with this email
 *           content:
 *               application/json:        
 *                    schema: 
 *                       type: object  
 *                       properties:
 *                             error: 
 *                                 type: string
 *                                 description: error message for student not found with this email
 *        '500':
 *            summary: Internal Error
 *            content:
 *               application/json:        
 *                    schema: 
 *                       type: object  
 *                       properties:
 *                             error: 
 *                                 type: string
 *                                 description: error message for Internal error 
 */
 authRouter.post('/student-login', studentLogin);

 /**
 * @swagger
 * /teacher-login:
 *  post:
 *     description: teacher login route
 *     tags: [Auth]
 *     requestBody:
 *        required: true
 *        content: 
 *            application/json: 
 *                schema:
 *                    type: object  
 *                    properties:
 *                          email: 
 *                              type: string
 *                              description: email entered for login
 *                          password: 
 *                               type: string 
 *                               description: password entered for login
 *     responses:
 *        '200':
 *            summary: Teacher Logged in Successfully (token sent)
 *            content:
 *               application/json:
 *                   schema: 
 *                      type: object  
 *                      properties:
 *                           accesstoken: 
 *                                type: string
 *                                description: accesstoken for teacher to access platform for a week 
 *        '400': 
 *            summary: Invalid Credentials
 *            content:
 *               application/json:        
 *                    schema: 
 *                       type: object  
 *                       properties:
 *                             error: 
 *                                 type: string
 *                                 description: error message for Invalid Credentials
 *        '401': 
 *           summary: Teacher not found with this email
 *           content:
 *               application/json:        
 *                    schema: 
 *                       type: object  
 *                       properties:
 *                             error: 
 *                                 type: string
 *                                 description: error message for teacher not found with this email
 *        '500':
 *            summary: Internal Error
 *            content:
 *               application/json:        
 *                    schema: 
 *                       type: object  
 *                       properties:
 *                             error: 
 *                                 type: string
 *                                 description: error message for Internal error 
 */
 authRouter.post('/teacher-login', teacherLogin);

 /**
 * @swagger
 * /student-forgotpassword:
 *  post:
 *     description: student forgot-password route
 *     tags: [Auth]
 *     requestBody:
 *        required: true
 *        content: 
 *            application/json: 
 *                schema:
 *                    type: object  
 *                    properties:
 *                          email: 
 *                              type: string
 *                              description: email entered 
 *                          
 *     responses:
 *        '200':
 *            summary: Email having reset password link sent successfully 
 *            content:
 *               application/json:
 *                   schema: 
 *                      type: object  
 *                      properties:
 *                            msg: 
 *                               type: string
 *                               description: success message if email sent successfully
 *        '401': 
 *           summary: Student not found with this email
 *           content:
 *               application/json:        
 *                    schema: 
 *                       type: object  
 *                       properties:
 *                             error: 
 *                                 type: string
 *                                 description: error message for student not found with this email
 *        '500':
 *            summary: Internal Error / No student found having id associated with email
 *            content:
 *               application/json:        
 *                    schema: 
 *                       type: object  
 *                       properties:
 *                             error: 
 *                                 type: string
 *                                 description: error message for Internal error / Student not found with id 
 */
  authRouter.post('/student-forgotpassword', studentForgotPassword);

 /**
 * @swagger
 * /teacher-forgotpassword:
 *  post:
 *     description: teacher forgot-password route
 *     tags: [Auth]
 *     requestBody:
 *        required: true
 *        content: 
 *            application/json: 
 *                schema:
 *                    type: object  
 *                    properties:
 *                          email: 
 *                              type: string
 *                              description: email entered 
 *                          
 *     responses:
 *        '200':
 *            summary: Email having reset password link sent successfully 
 *            content:
 *               application/json:
 *                   schema: 
 *                      type: object  
 *                      properties:
 *                            msg: 
 *                               type: string
 *                               description: success message if email sent successfully
 *        '401': 
 *           summary: Teacher not found with this email
 *           content:
 *               application/json:        
 *                    schema: 
 *                       type: object  
 *                       properties:
 *                             error: 
 *                                 type: string
 *                                 description: error message for teacher not found with this email
 *        '500':
 *            summary: Internal Error / No teacher found having id associated with email
 *            content:
 *               application/json:        
 *                    schema: 
 *                       type: object  
 *                       properties:
 *                             error: 
 *                                 type: string
 *                                 description: error message for Internal error / Teacher not found with id 
 */
  authRouter.post('/teacher-forgotpassword', teacherForgotPassword);

 module.exports = authRouter;

// Models
/**
 * @swagger
 * components:
 *    schemas:
 *      Student:
 *         type: object
 *         required:
 *            - name
 *            - email
 *            - password
 *            - college
 *            - course
 *            - year
 *            - created_at
 *         properties:
 *            _id: 
 *               type: string
 *               description: auto-generated unique id for student
 *            name:
 *               type: string
 *               description: student's name
 *            email: 
 *               type: string
 *               description: student's email
 *            password: 
 *               type: string
 *               description: secured password for student
 *            college: 
 *               type: string
 *               description: student's college name
 *            course: 
 *               type: string
 *               description: course student currently pursuing
 *            year: 
 *               type: string
 *               description: year student currently pursuing
 *            created_at:
 *               type: string
 *               description: date and time when student registered
 *         example:
 *            _id    : 40ed9df9aac5bc0045746fc1
 *            name    : Sunil Joshi
 *            email   : suniljoshi4121@gmail.com
 *            password: $sujo4214.shicse
 *            college : MNIT, Jaipur
 *            course  : B.Tech in CSE
 *            year    : 2nd year 
 *            created_at : July 15th 2021, 2:58:24 pm
 *             
 */


/**
 * @swagger
 * components:
 *    schemas:
 *      Teacher:
 *         type: object
 *         required:
 *            - name
 *            - email
 *            - password
 *            - qualification
 *            - experience
 *            - domain
 *            - created_at
 *         properties:
 *            _id: 
 *               type: string
 *               description: auto-generated unique id for teacher
 *            name:
 *               type: string
 *               description: teacher's name
 *            email: 
 *               type: string
 *               description: teacher's email
 *            password: 
 *               type: string
 *               description: secured password for teacher
 *            qualification: 
 *               type: string
 *               description: teacher's qualification
 *            experience: 
 *               type: string
 *               description: teacher's experience
 *            domain: 
 *               type: string
 *               description: teacher's teaching domain 
 *            created_at:
 *               type: string
 *               description: date and time when teacher registered
 *         example:
 *            _id     : 40ed9df9aac5bc0045746fc1
 *            name    : Mayank Goswami
 *            email   : mayank5301goswami@gmail.com
 *            password: $maya5301.mlgos
 *            qualification : PhD in Electronics
 *            experience    : 5 years
 *            domain        : Electronics
 *            created_at    : June 21st 2020, 8:35:52 am
 *             
 */
