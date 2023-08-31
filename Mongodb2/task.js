// inserting documents inside the tasks collection
db.tasks.insertMany([
    {
      "task_id": 1,
      'topic_id': 1,
      "user-id": 1,
      "task": "HTML task",
      "due_date": new Date("2023-04-05"),
      "submitted": true,
    },
    {
      "task_id": 2,
      'topic_id': 2,
      "user-id": 2,
      "task": "CSS task",
      "due_date": new Date("2023-05-15"),
      "submitted": true,
    },
    {
      "task_id": 3,
      "topic_id": 3,
      "user-id": 3,
      "task": "Javascript task",
      "due_date": new Date("2023-06-20"),
      "submitted": false,
    },
    {
      "task_id": 4,
      "topic_id": 4,
      "user-id": 4,
      "task": "React task",
      "due_date": new Date("2023-02-25"),
      "submitted": false,
    },
    {
      "task_id": 5,
      "topic_id": 5,
      "user-id": 5,
      "task": "Node task",
      "due_date": new Date("2023-02-10"),
      'submitted': false,
    },
  ]);
  
  