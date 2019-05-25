// MVC separates an application into three distinct, independent components that
// interact with each other:

// MODELS
// Models are objects that implement the functionality for creating, reading,
// updating and deleting (known as CRUD tasks) specific pieces of information
// about the application, as well as any other associated logic and behavior. In a
// to-do list application, for example, there would be a task model providing
// methods to access all the information about the tasks such as names, due dates
// and completed tasks. This data will often be stored in a database or some
// other container.

// VIEWS
// Views provide a visual representation of the model showing all the relevant
// information. In a web application, this would be the HTML displayed on a
// web page. Views also provide a way for users to interact with an application,
// 588 JavaScript: Novice to Ninja, 2nd Edition
// usually via forms. In a to-do list application, the views would display the
// tasks as an HTML list with checkboxes that a user could tick to say a task had
// been completed.

// CONTROLLER
// Controllers link models and views together by communicating between them.
// They respond to events, which are usually inputs from a user (entering some
// data into a form, for example), process the information, then update the model
// and view accordingly. In a to-do list application, the controller functions
// would respond to the event of a user clicking on a check box and then inform
// the model that a task had been completed. The model would then update the
// information about that task.

