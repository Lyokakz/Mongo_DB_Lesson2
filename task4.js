//Агрегация: сумма кармы по первой букве имени (если визитов > 300):
db.users.aggregate([
  { $match: { visits: { $gt: 300 } } },
  {
    $group: {
      _id: { $substrCP: ["$first_name", 0, 1] },
      total_karma: { $sum: "$karma" }
    }
  }
])

