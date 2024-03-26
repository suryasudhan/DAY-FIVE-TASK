// CREAT YOUR RESUME DATA IN JASON FORMAT :
let myResume = {
    "basics": {
      "name": "SURYA.R",
      "email": "suryasudhan2000@gmail.com",
      "phone": 9844733003,
      "degree": "B.E",
      "location": {
        "address": "13/a bennangur village",
        "postalCode": 635107,
        "city": "denkanikottai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/in/surya-undefined-ba2a0b241/",
          "github": "https://github.com/suryasudhan"
        }
      ]
    },
  
    "education": [
      {
        "institution": "hindusthan College Of Engineering and technology",
        "department": "Mechatronics",
        "studyType": "fulltime",
        "batch start year": 2018,
        "batch end year": 2022,
        "gpa": 8
      }
    ],
  
    "skills": [
      {
        "name": "HTML, javascript",
        "level": "beginner"
      }
    ],
  
    "languages": [
      {
        "language": "Tamil, English"
      }
    ],
  
    "interests": [
      {
        "name": "WEB DEVELOPER"
      }
    ]
  };
  
  console.log(myResume);
  

//   THE GIVEN JSON ITERATE OVER ALL FOR LOOPS (FOR,FOR IN , FOR FO ,FOR EACH)

var json = {
    my_Name: "surya",
    Date_of_birth: "29/04/2000",
    Email: "suryasudhan2000@gmail.com",
    Gender: "Male",
    Nationality: "Indian",
    Marital_Status: "Single",
    Languages_known: ["English", "Tamil"],
    Age: 24,
    Marks: { "B.E": "CGPA 8", "Higher secondary": "76%", SSLC: "78%" },
    College:"hindusthan college of enginering and technology",
  };
  const count = Object.keys(json);
  
  // for loop
  for (let i = 0; i < count.length; i++) {
    console.log(json[count[i]]);
  }
  
  // for in
  for (let keys in json) {
    console.log(json[keys]);
  }
  
  // for Of
  for (let i of count) {
    console.log(json[i]);
  }
  
  // for each
  count.forEach(values);
  function values(item) {
    console.log(json[item]);
  }