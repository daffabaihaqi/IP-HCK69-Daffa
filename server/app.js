/*
    npx sequelize-cli model:generate --name User --attributes email:string,password:string,firstName:string,lastName:string

    npx sequelize-cli model:generate --name Sticker --attributes name:string,url:string

    npx sequelize-cli model:generate --name Contact --attributes userId:integer,friendId:integer

    npx sequelize-cli model:generate --name Message --attributes senderId:integer,message:text,stickerId:integer

    npx sequelize-cli model:generate --name PurchasedSticker --attributes userId:integer,stickerId:integer
*/