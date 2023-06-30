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

describe('Test todos', () => {
    test('should create new post', async () => {
        const response = await request(app)
        .post('/todos')
        .send({title: "test title", description: "test desc."})

        expect(response.statusCode).toBe(200)
        expect(response.body.title).toEqual("test title")
        expect(response.body.description).toEqual("test desc.")
        expect(response.body.completed).toEqual(false)
    })
    test('should return all todos array', async () => {
        const todos = [
            {title: "test", describe: "test desc."},
            {title: "test 2", description: "test desc. 2"}
        ]
        const response = await request(app).get("/todos")
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(todos)
    })
    test('shuold show a sinlge todo', async () => {
        const todo = new Todo({title: "test", description: "test desc."})
        await todo.save()
        const response = await request(app)
            .put(`/todos/${todo._id}`)
            .send(todo)

        expect(response.statusCode).toBe(200)
        expect(response.title).toEqual('test')
        expect(response.description).toEqual('test desc.')
    })
    test('should update a todo', async () => {
        const todo = new Todo({title: "test", description: "test desc."})
        await todo.save()
        const response = await request(app)
            .put(`/todos/${todo._id}`)
            .send({title: "test", description: "test desc."})

            expect(response.statusCode).toBe(200)
            expect(response.title).toEqual('test')
            expect(response.description).toEqual('test desc.')
    })
    test('should delete a todo', async () => {
        const todo = new Todo ({title: "test", description: "test desc."})
        await todo.save()
        const response = await request(app).delete(`/todos/${todo._id}`)
        
        expect(response.statusCode).toBe(200)
        expect(response.body._id).toEqual(todo._id.toString())
    })
})