# Mood Ring

A self-help app for healthier habits and safer schools.
Full Stack CRUD application utilizing the 7 RESTful routes, Express.js, MongoDB, Mongoose, Embedded JavaScript, and node.js. This is all within the MVC design pattern. 

# Functional deployment
[https://still-sierra-16854-4298cf6fca1b.herokuapp.com/logs/](https://still-sierra-16854-4298cf6fca1b.herokuapp.com/logs/)

# Details:

* **Mood Ring** is a mood tracker for people of all ages to express themselves and learn from stressors.
* Users will create logs to track their mood, (scaling question 1-5), along with details of when and where the event happened. Users can even pick which color they'd like display with the log!
* Of course, users can view their past logs and are able to edit and delete them.

* As implemented in a school environment, the app produces a data stream for school personnel (guidance counselors, principals, deans, etc.) to learn from their students and provide outreach if needed.
* The app is a solution to a central problem that school systems face: how to assess students' social-emotional well-being. The app facilitates data analysis for administrators and highlights students in need.
* Mood Ring will allow students to, without fear of other students finding out, request a check-in with a guidance counselor.
* At the least, Mood Ring allows people to journal their mood at different points in the day for use as part of a therapeutic intervention in accordance with mainstream Cognitive Behavioral Therapy (CBT) and positive psychology practices.

# Technologies used:

* I used Express.js, MongoDB, and Mongoose to set up the database, the server, and to facilitate data usage in server-side rendering.
* Node.js modules such as Embedded JavaScript (EJS, plus EJS partials), method-override and, dotenv. This is in addition to HTML, CSS, and JavaScript through EJS and Express handling of static files.
* User account functionality: sign up/login, with encrypted passwords (npm module bcrypt) and authorization flow (express-session).
* This full stack application is set up with the MVC design pattern and has fully RESTful routes and full CRUD.

# Future Improvements

* Users must be able to view only their own logs. As of 9/22/23, there is only one group of logs to be posted (Log model/schema). The functionality exists, since each user is a uniquely identified username with encrypted password.
* Mobile responsiveness, particularly with some of the rendered HTML elements.
* A self-contained app for iOS (Swift) and for Android (Kotlin) phones would be ideal.

# Installation 

* Clone this repo, and be sure to set up your Mongo_URI and other necessary variables in your own .env file.
* There is a seed.js file for some starting database entries! Run node seed.js while in the root directory of the application.

# Wireframe and Design Process 

* I wanted to make the UI as minimal as possible, while still being easy to navigate. I knew I had to have a "ring" of some sort, so the CSS border-shadow was my friend.

| Route Name | URL | HTTP Verb | Description |
| -------- | -------- | -------- | -------- | 
| Index  | /logs | GET | homepage of app |
| New | /logs/new     | GET | show form to enter new mood log |
| Create    | /logs    | POST | add new log to database, redirect home |
| Show    | /logs:id    | GET | show detail of one mood log |
| Edit    | /logs/:id/edit    | GET | show edit form for one mood long |
| Update    | /logs/:id    | PUT | update one mood long, redirect home |
| Destroy    | /logs/:id    | DELETE | delete one mood long, redirect home |

Wireframe
![image](https://github.com/ianpmaher/moodring/assets/120536234/6013c824-fc3e-4bc7-adb3-6d661662bf66)
![image](https://github.com/ianpmaher/moodring/assets/120536234/6796de9b-34b1-434c-8b16-970d3ad6615d)
![image](https://github.com/ianpmaher/moodring/assets/120536234/bc7df9a0-83c6-4522-b479-c71156783dcd)
![image](https://github.com/ianpmaher/moodring/assets/120536234/0944115c-72a4-44f6-bbb5-811068b99952)
![image](https://github.com/ianpmaher/moodring/assets/120536234/7a43fc46-f0e5-492b-a2d4-6ecbd4935378)
![image](https://github.com/ianpmaher/moodring/assets/120536234/a0fe2744-7801-4b4d-be35-1699b0d76f43)



# User Stories
- As a student, I want to log my mood so that I can keep track of what events may influence/trigger my mental state.
- As a student, I want a quick and efficient way to log my information so that I can get on with my day.
- As a student, I want to be able to notify someone if I need a check-in, so that I can ask for help without being noticed.
- As a student, I want to be able to report something wrong to my guidance counselor and/or school administration anonymously, so that I can keep my privacy and avoid other students finding out.
- As a school administrator, I want to review data on my students’ wellbeing and mental health. 
- As a guidance counselor, I want to analyze my students’ emotional states on a daily basis, so that I can better address their needs.
- As a guidance counselor, I want to review the attendance of my students and see if they are not logging their moods/mental states, so that I can address school absenteeism. 
