// fields:
// id
// type: type of question
// option: options accompanying the question
// other: does it need to provide a section to get response for option that may not be present in the option


let required_questions = [
  {
    id: 1,
    question: "What is your engineering branch?",
    type: "radio",
    option_array: [
      "Computer Science and Engineering",
      "Information Technology",
      "Mechanical Engineering",
      "Electronics and Communication Engineering",
      "Civil Engineering",
    ]
  },
  {
    id: 2,
    question: "What is your current academic year?",
    type: "radio",
    option_array: [
      "First Year",
      "Second Year",
      "Third Year",
      "Fourth Year",
    ],
  },
  {
    id: 3,
    question: "In which technical area(s) do you feel most confident?",
    type: "checkbox",
    option_array: [
      "Programming",
      "Problem-solving",
      "Hardware systems",
      "Software Development",
      "Data analysis",
    ],
    other: true,
  },
  {
    id: 4,
    question: "Which programming languages are you proficient in?",
    type: "checkbox",
    option_array: [
      "JavaScript",
      "Python",
      "Java",
      "C#",
      "C++",
      "Ruby",
      "PHP",
      "Swift",
      "Go",
      "Kotlin",
      "TypeScript",
      "Rust",
      "Scala",
      "Dart",
      "Shell",
      "Perl",
      "Objective-C",
      "Haskell",
      "Elixir",
      "Lua",
      "MATLAB"
    ],
    other: true,
  },
  {
    id: 5,
    question: "How would you rate your technical expertise in your field?",
    type: "radio",
    option_array: ["Beginner", "Intermediate", "Advanced", "Expert"],
  }
]

let informative_questions = [
  {
    id: 6,
    question: "Which of the following career roles align with your goals?",
    type: "radio",
    option_array: [
      "Software developer",
      "Data scientist",
      "Cybersecurity analyst",
      "Product manager",
      "IoT specialist"
    ],
    other: true,
  },
  {
    id: 7,
    question: "What topics in computer science interest you the most?",
    type: "checkbox",
    option_array: [
      "Artificial Intelligence 🤖",
      "Machine Learning 📊",
      "Data Structures and Algorithms 📚",
      "Web Development 🌐",
      "Mobile App Development 📱",
      "Cybersecurity 🔒",
      "Cloud Computing ☁️",
      "Blockchain Technology ⛓️",
      "Internet of Things (IoT) 🌍",
      "Game Development 🎮",
      "Software Engineering 🛠️",
      "Human-Computer Interaction (HCI) 👥",
      "Database Management Systems 🗄️",
      "Computer Networks 🌐",
      "Operating Systems 🖥️",
      "DevOps and Continuous Integration 🔄",
      "Virtual Reality (VR) and Augmented Reality (AR) 🕶️",
      "Natural Language Processing (NLP) 🗣️",
      "Robotics 🤖",
      "Quantum Computing ⚛️",
      "Ethical Hacking 🕵️‍♂️"
    ],
    other: true,
  },
  {
    id: 8,
    question: "Why do you want to work in the field of computer science?",
    type: "textbox",
    other: false,
  },
  {
    id: 9,
    question: "What type of technologies do you find exciting to explore?",
    type: "radio",
    option_array: [
      "Cutting Edge Technologies (Quantum Computing, AI, Blockchain, VR/AR, etc.)",
      "Emerging Technologies (Internet of Things, 5G, Cloud Computing, etc.)",
      "Practical Applications (Web Development, Mobile App Development, etc.)",
    ],
    other: false
  }

]

export const questions = {
  required_questions,
  informative_questions
};

export default questions;