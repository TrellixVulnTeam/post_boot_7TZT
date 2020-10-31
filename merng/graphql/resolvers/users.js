
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {UserInputError } = require('apollo-server')

const {validateRegisterInput, valiateUserInput} = require('../../util/validators')
const {SECRET_KEY} = require('../../config');

const User = require('../../models/User');
const { validateLoginInput } = require('../../util/vaildators');

function generateToken(user){
    return jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username
            }, 
            SECRET_KEY, {expiresIn: '1h'})
}

module.exports ={
    Mutation: {
        async login(_, {username, password}){
            const {errors, valid} = validateLoginInput(username, password);
            if(!valid){
                throw new UserInputError('Errors', {errors})
            }
            const user = await User.findOne({username});

            if(!user){
                errors.general = 'User not found'
                throw new UserInputError('User not found', {errors});
            }

            const match = await bcrypt.compare(password, user.password);
            if(!match){
                 errors.general = 'Wrong credentials';
                throw new UserInputError('wrong creds', {errors})
            }
            const token = generateToken(user)
        },
        async register(_, 
            {registerInput: {
            username,
            email,
            password,
            confirm_password
        }}, 
        context, 
        info){
            //TODO: Validate user data
            const {valid, errors} = validateRegisterInput(username, email, password, confirm_password);
            if(!valid){
                throw new UserInputError('Errors', {errors});
            }
            // TODO: Make sure user doresn't already exist
            const user = await User.findOne({username });
            if(user){
                throw new UserInputError('Username is taken', {
                    errors: {
                        username: 'this user name is taken'
                    }
                })
            }
            //:hash passwrod and create authen token
            password = await bcrypt.hash(password, 12);

            const newUser = new User ({
                email, 
                username,
                password,
                createdAt: new Date().toISOString()
            });
            const res = await newUser.save();

            const token = generateToken(res)
            return {
                ...res._doc,
                id: res._id,
                token
            }
        }
    }
}