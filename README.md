# Conversion-Calculator


The Conversion Calculator is a web-based application that allows users to easily convert between different units of measurement. It provides three conversion options:

1. **Temperature: Celsius to Fahrenheit**
   - Users can enter a temperature in Celsius, and the calculator will instantly display the equivalent temperature in Fahrenheit.

2. **Weight: Kilograms to Pounds**
   - Users can input a weight in kilograms, and the calculator will instantly show the corresponding weight in pounds.

3. **Distance: Kilometers to Miles**
   - Users can enter a distance in kilometers, and the calculator will instantly display the equivalent distance in miles.

**Technologies Used:**
- HTML
- JavaScript
- CSS

**Features:**

1. **User-Friendly Interface:**
   - The calculator has a clean and intuitive user interface with input fields for each conversion type.

2. **Error Handling:**
   - The calculator handles invalid inputs gracefully and provides clear error messages if the input is not a valid number.

3. **Styling with CSS:**
   - The application is styled using CSS to make it visually appealing and user-friendly.

**How to Use:**

1. Open the `index.html` file in a web browser.
2. Choose the conversion type (Temperature, Weight, or Distance).
3. Enter the value you want to convert in the respective input field.
4. Click on `convert` button and view the converted value.

**Repository Structure:**
- `index.html`: Contains the HTML structure of the calculator.
- `script.js`: Contains the JavaScript code for handling conversions and user interactions.
- `style.css`: Contains the CSS code for styling the calculator.

**GitHub Repository Link:** [Insert GitHub Repository Link]

**Screenshots:**
-`Navbar`

![Screenshot 2023-10-07 141929](https://github.com/AmulyaShetty11/Conversion-Calculator/assets/137149903/26264795-c496-4cdb-9b54-414216dc2ac9)

-`Temperature: Celsius to Fahrenheit`

![Screenshot 2023-10-07 142011](https://github.com/AmulyaShetty11/Conversion-Calculator/assets/137149903/7fd81487-deb7-4efb-90c6-e80927b7643a)

-`Weight: Kilograms to Pounds`

![Screenshot 2023-10-07 142049](https://github.com/AmulyaShetty11/Conversion-Calculator/assets/137149903/8cc4a75f-1d93-4f93-a9be-636a20cae3ca)

-`Distance: Kilometers to Miles`

![image](https://github.com/AmulyaShetty11/Conversion-Calculator/assets/137149903/b9a998c7-6672-46f2-ad29-a64edd540989)

-`Home button and footer`

![Screenshot 2023-10-07 142629](https://github.com/AmulyaShetty11/Conversion-Calculator/assets/137149903/86f334f2-5b07-443e-b7ba-9bc577eff9b2)


import React, { useState } from "react"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button";

const questions = [ { id: 1, questionImg: "/shapes/q1.png", options: [ "/shapes/q1-opt1.png", "/shapes/q1-opt2.png", "/shapes/q1-opt3.png", "/shapes/q1-opt4.png" ], answerIndex: 3 }, { id: 2, questionImg: "/shapes/q2.png", options: [ "/shapes/q2-opt1.png", "/shapes/q2-opt2.png", "/shapes/q2-opt3.png", "/shapes/q2-opt4.png" ], answerIndex: 1 }, { id: 3, questionImg: "/shapes/q3.png", options: [ "/shapes/q3-opt1.png", "/shapes/q3-opt2.png", "/shapes/q3-opt3.png", "/shapes/q3-opt4.png" ], answerIndex: 0 }, { id: 4, questionImg: "/shapes/q4.png", options: [ "/shapes/q4-opt1.png", "/shapes/q4-opt2.png", "/shapes/q4-opt3.png", "/shapes/q4-opt4.png" ], answerIndex: 2 } ];

export default function EyeTestUI() { const [currentQ, setCurrentQ] = useState(0); const [selected, setSelected] = useState(null); const [score, setScore] = useState(0);

const handleOptionClick = (index) => { setSelected(index); if (index === questions[currentQ].answerIndex) { setScore(score + 1); } setTimeout(() => { if (currentQ < questions.length - 1) { setCurrentQ(currentQ + 1); setSelected(null); } else { alert(Test finished. Your score is ${score + (index === questions[currentQ].answerIndex ? 1 : 0)} / ${questions.length}); } }, 500); };

const { questionImg, options } = questions[currentQ];

return ( <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"> <h1 className="text-2xl font-bold mb-4">Eye Test</h1> <Card className="p-4 bg-white shadow-xl rounded-2xl"> <CardContent className="flex flex-col items-center"> <img src={questionImg} alt="Question" className="w-32 h-32 mb-6" /> <div className="grid grid-cols-2 gap-4"> {options.map((opt, idx) => ( <Button key={idx} variant="outline" onClick={() => handleOptionClick(idx)} className={p-2 border-2 rounded-xl ${selected === idx ? "border-blue-500" : "border-gray-300"}} > <img src={opt} alt={Option ${idx + 1}} className="w-24 h-24" /> </Button> ))} </div> </CardContent> </Card> </div> ); }

