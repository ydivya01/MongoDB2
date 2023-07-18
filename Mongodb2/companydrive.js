// inserting documents inside the companydrives collection
db.company_drives.insertMany([
    {
      "user-id": 1,
      "drive_date": new Date("2022-10-12"),
      "company_name": "Microsoft",
    },
    {
      "user-id": 1,
      "drive_date": new Date("2022-10-10"),
      "company_name": "Google",
    },
    {
      "user-id": 2,
      "drive_date": new Date("2022-10-09"),
      "company_name": "Capgemini",
    },
    {
      "user-id": 3,
      "drive_date": new Date("2022-10-08"),
      "company_name": "CSG",
    },
    {
      "user-id": 4,
      "drive_date": new Date("2022-10-07"),
      "company_name": "Accenture",
    },
  ]);