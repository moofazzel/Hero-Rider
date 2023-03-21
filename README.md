#‘Hero Rider’ is a ride sharing startup. A driver who has his/her own or rented car can give
rides to other people. They also provide driving lessons services. They want you to build
some features given below with node js, react js and mongodb -

1.There will be two type of sign up
a) Join as a rider . User need to add Full name, email, age, address, phone,
driving licence picture, area, nid picture, profile picture, car information
(name, model, name palate), password, confirm password , vehicle type (
car, bike). After registration he/she will be redirected to his profile page.
b) Join as a Driving Lesson Learner. User need to add Full name, email, age,
address, phone, profile picture, nid picture, password, confirm password,
vehicle type ( car, bike)

2. In the admin panel an admin can see the registered user list. He can search users by
   email, phone, and fullName. He can filter users by age range. (Example : 18-25, 26-30).
   Make this with proper backend pagination with 10 data per page.
   Admin email: admin@admin.com
   Password: abcd1234
3. In the table, every row should have a checkbox to mark/check to do bulk action. An
   admin can block multiple users if he finds anything suspicious.
4. If a user joins as a driving lesson learner he will find two packages. For car driving lessons
   it will be 200$ and for bike driving lessons it will be 100$ . User has to make payment via
   stripe.
