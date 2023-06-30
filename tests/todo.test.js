const request = require('supertest')
const mongoose = require('mongoose')
const {MongoMemoryServer} = require('mongodb-memory-server')
const app = require ('../app')
const server = app.listen(8080, () => {
    console.log('Lets get testing')
})
const Todo = require('../models/todo')
let mongoServer 

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri)
})

afterAll(async() => {
    await mongoose.connection.close()
    mongoServer.stop()
    server.close()
})

describe('Test todos endpoints', () => {
    
})