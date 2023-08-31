// inserting documents inside the topics collection
db.topics.insertMany([
    {
      "topic_id": 1,
      "topic": "HTML",
      "topic_date": new Date("2023-02-01"),
    },
    {
      "topic_id": 2,
      "topic": "CSS",
      "topic_date": new Date("2023-03-01"),
    },
    {
      "topic_id": 3,
      "topic": "Javascript",
      "topic_date": new Date("2023-04-01"),
    },
    {
      "topic_id": 4,
      "topic": "React",
      "topic_date": new Date("2023-05-01"),
    },
    {
      "topic_id": 5,
      "topic": "NodeJs",
      "topic_date": new Date("2023-06-01"),
    },
  ]);