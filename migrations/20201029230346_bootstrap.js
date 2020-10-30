
exports.up = function(knex) {
  return knex.schema
    .createTable("wods", table => {
      table
        .increments()
      table
        .string("name")
        .notNullable()
      table
        .text("description")
    })

    .createTable("exercises", table => {
      table
        .increments()
      table
        .string("name")
        .notNullable()
    })

    .createTable("exercise_sets", table => {
      table
        .increments()
      table
        .integer("exercise_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("exercises")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      table
        .integer("reps")
        .notNullable()
      table
        .integer("weight")
        .notNullable()
    })

    .createTable("wod_exercise", table => {
      table
        .integer("wod_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("wods")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      table
        .integer("exercise_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("exercises")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      table
        .primary(["wod_id", "exercise_id"])
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("wod_exercise")
    .dropTableIfExists("exercise_sets")
    .dropTableIfExists("exercises")
    .dropTableIfExists("wods")
};
