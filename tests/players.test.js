const db = require('../db/knex');

beforeAll(async () => {
  await db.migrate.latest()
})
afterAll(async () => {
  return db.migrate
      .rollback()
      .then(() => db.destroy());
})

test("select players", async () => {
  let users = await db.from("players").select("first_name");
  expect(users.length).toEqual(0)
})

test("insert players", async () => {
  await db.seed.run()
  let users = await db.from("players").select("first_name");
  expect(users.length).toEqual(25);
})

test("update player", async () => {
  await db.seed.run()
  let user = await db.from("players").where('id', '=', '14').select('first_name');
  expect(user[0].first_name).toEqual('Ike');
  await db.from("players").where('id', '=', '14').update({first_name: 'Iksu'});
  let updatedUser = await db.from("players").where('id', '=', '14').select('first_name');
  expect(user[0].first_name).not.toEqual(updatedUser[0].first_name);
})

test("delete player", async () => {
  await db.seed.run()
  let users = await db.from("players").select("first_name");
  expect(users.length).toEqual(25);
  await db.from("players").where('id', '=', '14').del();
  let withDeletedUser = await db.from("players").select("first_name");
  expect(withDeletedUser.length).toEqual(24);
})

