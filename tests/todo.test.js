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
    test('should create new post', async () => {
        const response = await request(app)
        .post('/todos')
        .send({title: "test title", description: "test desc."})

        expect(response.statusCode).toBe(200)
        expect(response.body.title).toEqual("test title")
        expect(response.body.description).toEqual("test desc.")
        expect(response.body.completed).toEqual(false)
    })
    test('should return list of todos in array', () => {

    })

})