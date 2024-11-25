import AWS from 'aws-sdk';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const saveUser = async (user) => {
    const params = {
        TableName: process.env.USERS_TABLE,
        Item: user,
    };
    return await dynamoDb.put(params).promise();
};

export const findUser = async (username) => {
    const params = {
        TableName: process.env.USERS_TABLE,
        Key: { username },
    };
    const result = await dynamoDb.get(params).promise();
    return result.Item;
};
