export const numberBasicsLessons = [
    {
      id: 1,
      title: "Introduction to Numbers",
      description: "Learn about the concept of numbers and their importance in everyday life.",
      content: `
        Numbers are fundamental to mathematics and our daily lives. They help us count, measure, and understand quantities.
  
        1. What are numbers?
           Numbers are abstract concepts used to represent quantities, order, and measurements. They are the building blocks of mathematics.
  
        2. Types of numbers:
           - Natural numbers: 1, 2, 3, 4, ... (used for counting)
           - Whole numbers: 0, 1, 2, 3, ... (natural numbers including zero)
           - Integers: ..., -2, -1, 0, 1, 2, ... (positive and negative whole numbers)
           - Rational numbers: numbers that can be expressed as fractions (e.g., 1/2, 3/4)
           - Irrational numbers: numbers that cannot be expressed as simple fractions (e.g., π, √2)
  
        3. Importance of numbers in everyday life:
           - Counting objects
           - Measuring quantities (time, distance, weight)
           - Handling money
           - Analyzing data and statistics
           - Problem-solving and decision making
  
        4. Number systems:
           - Decimal system (base 10): The most common system, using digits 0-9
           - Binary system (base 2): Used in computer science, using only 0 and 1
           - Other systems: Octal (base 8), Hexadecimal (base 16)
  
        Understanding numbers is crucial for developing mathematical skills and applying them to real-world situations.
      `,
      interactiveElement: {
        type: "dragAndDrop",
        instructions: "Drag the correct number of apples to match each number.",
        items: [
          { number: 3, target: "threeApples" },
          { number: 5, target: "fiveApples" },
          { number: 2, target: "twoApples" },
          { number: 4, target: "fourApples" }
        ]
      },
      videoLink: "https://www.youtube.com/embed/D9qHHIwB4HY",
      quiz: [
        {
          question: "What is the smallest whole number?",
          options: ["0", "1", "-1", "10"],
          correctAnswer: "0"
        },
        {
          question: "Which of the following is NOT a type of number mentioned in the lesson?",
          options: ["Natural numbers", "Whole numbers", "Imaginary numbers", "Rational numbers"],
          correctAnswer: "Imaginary numbers"
        },
        {
          question: "In the decimal system, how many digits are used?",
          options: ["2", "8", "10", "16"],
          correctAnswer: "10"
        },
        {
          question: "Which number system is commonly used in computer science?",
          options: ["Decimal", "Binary", "Octal", "Hexadecimal"],
          correctAnswer: "Binary"
        }
      ]
    },
    // ... other lessons ...
  ];