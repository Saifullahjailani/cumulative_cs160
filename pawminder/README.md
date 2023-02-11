# pawminder
A single stop to keep track of multiple dogs’ health, activities, and training sessions.

Please review `CS160 Group 13 Final Report.pdf` for detailed design process and choices. 

Please review `Final Project · Accountability · CS 160 Summer 2022.pdf` for project brief. 

## How To Run
1. Go to the client directory and install the npm dependencies by calling `npm install && npm run build`.
2. Now in the server directory install the npm dependencies by calling `npm install && node app.js`.
3. Browse this `http://localhost:8000` in your browser, go to inspect and select iphone 6/7/8 plus as your device.

## How To Setup Development Environment
1. Install the dependencies as mentioned above. 
2. Run the main/API server using `npx nodemon` or `nodemon node.js`.
3. Run the instant load server from the client directory by running `npm start`. 
## Task Analysis
One of the main tasks which my app would support is Health Tracking. This will involve a variety of subtasks. Users will be able to set a medication reminder, which will operate automatically once the user has input their pet’s medication schedule, reminding them when their pet must be given its required shots, pills, dental care, etc. Through this task, the user may also set an appointment calendar or schedule an appointment with a veterinarian. A separate function under the umbrella of Health Tracking will be a chatbot feature. This seems like a necessary addition, because medical problems can present themselves rapidly and the user may want information immediately, while it may be some time before they can schedule a vet appointment. Another function supporting Health Tracking is the vaccination record, which allows users to add and remove records of their pet’s vaccinations. 

The second main task my app will support is Activity Tracking. One subtask of Activity Tracking is the activity level. The activity level of the pet will be categorized as low, medium, or high by the app based on information input by the owner into a log. For example, if the owner inputs that their dog walked on only a few occasions and these walks were of short duration, while the dog slept for a large portion of the day, the app would interpret this as indicating a “low” activity level and would inform the owner accordingly. The activity log subtask allows the owner to input information on their pet’s exercise, food and water consumption, sleep habits, and training, all of which will be analyzed by the app to adjust the reported activity level. 

The third main task the app will support is Training Advice. This will be supported by a search function for training videos, which will allow the user to peruse a broad variety of pet training videos from all over the internet. 

## Interview
Who to recruit:
- The target user group: Any dog owner who either owns a dog or whose family owns a dog. 
- How will we reach out to target users: We will send out recruiting messages through Slack groups. 
- How many people will you reach out to: 3
- Will you perform two 20-min interviews or three 10-min interviews? We will perform three 10-min interviews.

## Recruiting Message
Pat tracker design for dog owners

Hi Everyone! We are two undergraduate students taking CS160, User Interface Design and Development at UC Berkeley. We want to invite you to participate in a remote study about our newly designed pat tracker app.

During this study, we will spend  10 minutes asking questions and the participants will have to give feedback about what is  your desired pet app and what features they would like to have the most. 

If you are interested in participating, please reply to this message or email claireliu123@berkeley.edu or mko357@berkeley.edu with any questions.

## Interview Guide
1. How long have you had your dog? 
2. What is the most difficult part of taking care of a dog? 
3. If one responsibility (feeding, walking, going to the vet) could be automated, which one would you choose and why? *highest value
4. How often do you do the following: *highest value
+ Feed your dog
+ Walk your dog
+ Go to the vet
+ Give your dog medication
5. What was the training process like for your dog? 
6. If you were to get more pets in the future, is there anything you would do differently?

          

