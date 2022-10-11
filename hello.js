const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        hello: String
        message: String
        time: String
    }
`);

const rootValue = {
    hello : ()=> 'Hello World',
    message : ()=> 'How is things going',
    time : ()=> new Date().getTime()
};
const source = '{ hello, message, time }';

graphql({ schema, source, rootValue }).then((response) => {
    console.log(JSON.stringify(response.data));
});