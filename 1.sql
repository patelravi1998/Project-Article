CREATE TABLE userinfo (
    id serial PRIMARY KEY,
    password varchar,
    username varchar
);


CREATE TABLE article (
    id serial PRIMARY KEY,
    title varchar,
    content varchar,
    userid integer
);

