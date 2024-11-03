
const employees = [
    {
        "id": 1,
        "firstName": "Amit",
        "email": "e@e.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Homepage",
                "taskDescription": "Create a responsive homepage for the website",
                "taskDate": "2024-10-10",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Fix Login Bug",
                "taskDescription": "Resolve the login issue on the platform",
                "taskDate": "2024-09-15",
                "category": "Bug Fix"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Create Landing Page",
                "taskDescription": "Design and implement the landing page",
                "taskDate": "2024-10-12",
                "category": "Development"
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Neha",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Database Optimization",
                "taskDescription": "Optimize the database queries",
                "taskDate": "2024-10-11",
                "category": "Database"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "User Authentication Setup",
                "taskDescription": "Implement user authentication for the app",
                "taskDate": "2024-09-10",
                "category": "Development"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstName": "Priya",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "UI Revamp",
                "taskDescription": "Update the UI for better user experience",
                "taskDate": "2024-09-30",
                "category": "Design"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Build API Endpoints",
                "taskDescription": "Develop backend API endpoints for the new feature",
                "taskDate": "2024-10-15",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Payment Gateway Integration",
                "taskDescription": "Integrate payment gateway into the system",
                "taskDate": "2024-10-01",
                "category": "Integration"
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 4,
        "firstName": "Rahul",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Project Report",
                "taskDescription": "Write the project report for the client",
                "taskDate": "2024-10-18",
                "category": "Documentation"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Resolve Deployment Issues",
                "taskDescription": "Fix issues during the deployment of the app",
                "taskDate": "2024-09-20",
                "category": "Deployment"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Data Migration",
                "taskDescription": "Migrate data to the new server",
                "taskDate": "2024-09-30",
                "category": "Migration"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 5,
        "firstName": "Suman",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Test New Features",
                "taskDescription": "Perform end-to-end testing of new features",
                "taskDate": "2024-10-20",
                "category": "Testing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Bug Fixes for Mobile App",
                "taskDescription": "Fix reported bugs in the mobile app",
                "taskDate": "2024-09-25",
                "category": "Bug Fix"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Security Patch",
                "taskDescription": "Apply security patch for the system",
                "taskDate": "2024-10-05",
                "category": "Security"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    }
];



    const admin = [ {
      "firstName":"Tilak",
      "id": 101,
      "email": "Tilak@123.com",
      "password": "123"
    }
]
  


// set karne ke lia



export const setLocalStorage = () => {
    localStorage.setItem("employees" ,JSON.stringify(employees))
    localStorage.setItem("admin" ,JSON.stringify(admin))
}

export const getLocalStorage = () => {

    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}


    
}