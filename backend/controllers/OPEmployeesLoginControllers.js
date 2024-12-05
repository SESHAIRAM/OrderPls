const AccessEmployeeModel = require('../models/AccessEmployeeModel');

exports.validateUserAccess = async (socket) => {
    socket.on('validateLogin', async (loginRequest) => {  // Listen for 'validateLogin' event from the client
        console.log(loginRequest);
        try {
            // Query to find the user with matching conditions
            const loginCredential = await AccessEmployeeModel.findOne({
                $or: [ // Use $or to match any of the three conditions
                    { userName: loginRequest.loginID },
                    { mailID: loginRequest.loginID },
                    { phone: loginRequest.loginID },
                ],
            });

            if (loginCredential.length !== 0) {  // Check if loginCredential exists, no need to check length here
                if (loginCredential.password === loginRequest.password) {
                    // Emit the result to the client with 'loginSuccess' event
                    socket.emit('employeeLogin', {
                        isAuth: true,
                        message: "Login Successfully",
                        employeeID: loginCredential._id,
                        userName: loginCredential.userName,
                        employeeType: loginCredential.employeeType,
                        room:loginCredential.room,
                        CompanyName: loginCredential.CompanyName
                    });
                } else {
                    // Emit an event with a wrong password message
                    socket.emit('employeeLogin', {
                        isAuth: false,
                        message: "Wrong Password",
                    });
                }
            } 
        } catch (error) {
            // Emit a failure event in case of any errors during the query
            socket.emit('employeeLogin', {
                isAuth: false,
                message: "LoginID didn't matched",
            });
        }
    });
};
