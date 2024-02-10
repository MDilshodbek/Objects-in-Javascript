// var user = {
//   name: `Dilshodbek`,
//   surname: `Makhmudov`,
//   age: 25,
// };

// To create
// user["full name"] = `${user.name} ${user.surname}`;

// user.nationality = `Uzbekistan`;

// user["Current city"] = `South Korea, Daejeon`;

// user.nickname = `David`;

// var hobby = "traveling";
// user.hobby = `${hobby}`;
// console.log(user);

// To update
// user.age = 26;

// To delete
// delete user["Current city"];

// console.log(user);

// console.log(user.name);
// console.log(user["surname"]);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// var n = Object.keys(user);

// for (let i = 0; i < n.length; i++) console.log(n[i]);

// for (let i = 0; i < n.length; i++) console.log(user[n[i]], n[i]);

// var entries = Object.entries(user);

// for (let i = 0; i < entries.length; i++)
//   console.log(entries[i][0], entries[i][1]);

var names = {
  name1: "Dilyor",
  name2: "Murod",
  name3: "Maqsad",
  name4: "Ahad",
  name5: "Maqsad",
  name6: "Ahad",
  name7: "Maqsad",
};

var count = 0;
var given_name = "Maqsad";
var values = Object.values(names);

for (let i = 0; i < values.length; i++)
  if (values[i] === given_name) {
    count++;
  }
console.log(`Found ${count} names which is equal to ${given_name}`);
