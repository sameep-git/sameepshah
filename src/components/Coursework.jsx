import React from "react";
import './Coursework.css'

const Coursework = () => { 
  const data = {
    "semesters": {
        "Spring 2023" : {
            "classes" : [
            {"class": "COSC 20203", "desc":"Techniques in Programming", "grade": "A"},
            {"class": "MATH 20123", "desc":"Discrete Mathematics I", "grade": "A"},
            {"class": "ENGL 10803", "desc":"Intro to Composition: Writing as Inquiry", "grade": "A"},
            {"class": "ECON 10233", "desc":"Intro to Macroeconomics", "grade": "B"},
            {"class": "PHYS 10273", "desc":"Archeoastronomy", "grade": "A"},
            {"class": "SOCI 20223", "desc":"Social Problems", "grade": "A"}
        ]
        },
        "Fall 2022" : {
        "classes" : [
            {"class": "COSC 10403", "desc":"Introduction to Programming", "grade": "A"},
            {"class": "MATH 10524", "desc":"Calculus I", "grade": "A"},
            {"class": "ECON 10223", "desc":"Intro to Microeconomics", "grade": "A"},
            {"class": "PHYS 10273", "desc":"Intro to Astronomy", "grade": "A"},
            {"class": "PSYC 10213", "desc":"Intro to Psychology", "grade": "A"},
            {"class": "UNLF 10211", "desc":"Intro to University Life", "grade": "A"}
        ]
        },
        "Fall 2023" : {
            "classes" : [
            {"class": "COSC 20803", "desc":"Data Structures", "grade": "A"},
            {"class": "CITE 30103", "desc":"Unix/Linux System Admin", "grade": "A"},
            {"class": "MATH 30123", "desc":"Discrete Mathematics II", "grade": "A"},
            {"class": "ECON 30223", "desc":"Intermediate Microeconomics", "grade": "A"},
            {"class": "HNRS 20243", "desc":"Culture, Literature and Adaptations", "grade": "A"},
            {"class": "GEOL 10113", "desc":"Understanding the Earth", "grade": "A"}
        ]
        },
        "Spring 2024" : {
            "classes" : [
            {"class": "COSC 30253", "desc":"Computer Organization", "grade": "A-"},
            {"class": "COSC 30403", "desc":"Programming Language Concepts", "grade": "A"},
            {"class": "MATH 30224", "desc":"Linear Algebra", "grade": "A"},
            {"class": "MATH 20524", "desc":"Calculus II", "grade": "A"},
            {"class": "ECON 30243", "desc":"Contending Perspectives in Economics", "grade": "A"}
        ]
        },
        "Fall 2024" : {
            "classes" : [
            {"class": "COSC 30203", "desc":"Computer System Fundamentals", "grade": "/"},
            {"class": "COSC 40403", "desc":"Analysis of Algorithms", "grade": "/"},
            {"class": "COSC 30603", "desc":"Database Systems", "grade": "/"},
            {"class": "COSC 40043", "desc":"Mobile App Development", "grade": "/"},
            {"class": "ECON 30223", "desc":"Intermediate Macroeconomics", "grade": "/"},
            {"class": "MATH 30853", "desc":"Statistics", "grade": "/"}
        ]
        }
        }
    }

  return (
    <div>
        <div class="coursework" >
        <h1 class="coursework-text md:mx-12">Coursework</h1>
            <div class="semesters">
                    <div class="semester xl:mx-20 md:mx-12">
                    <h3 class="sem-text">Spring 2024</h3>
                        <table className="border border-gray-300 table"></table>
                        <tbody>
                            {data.semesters["Spring 2024"].classes.map( (row, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border border-gray-300">{row.class}</td>
                                    <td className="px-4 py-2 border border-gray-300 desc-row">{row.desc}</td>
                                    <td className="px-4 py-2 border border-gray-300">{row.grade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </div>
                    <div class="semester xl:mx-20 md:mx-12">
                    <h3 class="sem-text">Fall 2023</h3>
                        <table className="border border-gray-300 table"></table>
                        <tbody>
                            {data.semesters["Fall 2023"].classes.map( (row, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border border-gray-300">{row.class}</td>
                                    <td className="px-4 py-2 border border-gray-300 desc-row">{row.desc}</td>
                                    <td className="px-4 py-2 border border-gray-300">{row.grade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </div>
                </div>
                <div class="semesters">
                    <div class="semester xl:mx-20 md:mx-12">
                    <h3 class="sem-text">Spring 2023</h3>
                        <table className="border border-gray-300 table"></table>
                        <tbody>
                            {data.semesters["Spring 2023"].classes.map( (row, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border border-gray-300">{row.class}</td>
                                    <td className="px-4 py-2 border border-gray-300 desc-row">{row.desc}</td>
                                    <td className="px-4 py-2 border border-gray-300">{row.grade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </div>
                    <div class="semester xl:mx-20 md:mx-12">
                    <h3 class="sem-text">Fall 2022</h3>
                        <table className="border border-gray-300 table"></table>
                        <tbody>
                            {data.semesters["Fall 2022"].classes.map( (row, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border border-gray-300">{row.class}</td>
                                    <td className="px-4 py-2 border border-gray-300 desc-row">{row.desc}</td>
                                    <td className="px-4 py-2 border border-gray-300">{row.grade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default Coursework;