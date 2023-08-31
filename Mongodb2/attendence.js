// inserting documents inside the attendance collection


db.attendance.insertMany([
    {
      "user-id": 1,
      "topic_id": 1,
      "present": true,
    },
    {
      "user-id": 2,
      "topic_id": 2,
     "present": true,
    },
    {
      "user-id": 3,
      "topic_id": 3,
      "present": false,
    },
    {
      "user-id": 4,
      "topic_id": 4,
      "present": false,
    },
    {
      "user-id": 5,
      "topic_id": 5,
      "present": false,
    },
  ]);