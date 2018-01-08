const profile = {
  username: 'Ben',
  firstname: 'Ben',
  surname: 'Shapiro',
  password: '12345678',
  email: 'myemail@mail.com',
  picture: 'data:images',
  roles: [
    { role: 'tech', privilege: 'read' },
  ],
};

/*{
  "code": 403,
  "message" : "Authentication failed",
  "description" : "Invalid username or password"
}*/
// /v2.11/{user-id}/accounts