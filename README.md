# React Login Form

This project demonstrates a balance of performance, scalability, and ease of use:
- **Server side:** NodeJS
	- Efficient handling of concurrent requests
- **Client-side:** ReactJS
	- Simplifies the development of dynamic and interactive user interfaces
- **Database:** MySQL
	- Reliable and has widespread support for managing relational data

The front-end will be hosted on localhost 3000.
The back-end will be hosted on localhost 5000.
The default port for MySQL workbench should be 3306.

You may change ports and other credentials in the app code and database if necessary.
1. ```cd login-app```
2. Open ```server.js``` in VS Code or an IDE of your choosing.
3. Lines 13, 18, and 27 have port numbers hardcoded. This is where you can change ports to fit your needs.
4. ```cd ..```
5. Open ```.env``` in VS Code or an IDE of your choosing.
6. You may change ports as well as other credentials here.

<br>


## Set Up Node.JS

### I DON'T have NodeJS:
You can download NodeJs from this link: https://nodejs.org/en
You can also install NodeJs with this command in the terminal: ```sudo apt install node```
<br>

### I DO have NodeJS:

To check the status of node: ```node -v```
To check the status of npm: ```npm -v```
<br>

### I have issues on Linux:
1. Install ***nvm*** with this terminal command:
```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash```

2. Run this after the nvm installation:
```source ~/.bashrc```

3. To check the status of nvm:
```nvm --version```

4. Set the default Node version:
```nvm use node```
> **Note:**
> If you get an error, you may need to run this before the step above :
> ```nvm install node```

<br>

### Install Express:
> **Note:** This step may not be needed for the user to complete.

Navigate to the app location and use this line to install express:
```npm install express mysql2 bcryptjs express-session body-parser```
<br>

## Set Up MySQL

### I DON'T have MySQL:

You can download MySQL from this link: https://dev.mysql.com/downloads/mysql/
You can also install MySQL with this command in the terminal: 
```sudo apt install mysql-client-core-8.0```
<br>

### I DO have MySQL:

To check the version of MySQL: ```mysql --version```
To check the status of MySQL: ```mysql -u root -p```
Linux status check: ```sudo service mysql status```

### I have issues on Linux:

1. Update packages:
```sudo apt update```

2. Install MySQL server:
```sudo apt install mysql-server```

> You may need to stop the server to prevent other issues/errors:
```sudo service mysql stop```

3. Change the home directory:
```sudo usermod -d /var/lib/mysql mysql```

4. Give the correct permissions: 
```sudo mkdir -p /var/lib/mysql```
```sudo chown mysql:mysql /var/lib/mysql```

5. Start the server again:
```sudo service mysql start```

6. Check the status:
```sudo service mysql status```
<br>

## I have MySQL. What now?

### I DON'T have MySQL Workbench

You can download MySQL workbench from this link: https://dev.mysql.com/downloads/workbench/

### I DO have MySQL Workbench:

Run the MySQL Workbench program and open a connection. You will need to con

## Running the App

Download the app called **```login-app```** from the zip folder. Then, navigate to the folder that the app is in and start the app like this:
```cd login-app```
```npm start```

**Here is a list of most of the relevant commands:**
```npm start```
    Starts the development server.

```npm run build```		
    Bundles the app into static files for production.

```npm test```
    Starts the test runner.
<br>


### NPM Deprecated Packages
>**Note:** As a user of the app, you will likely not need to do this, so feel free to ignore the remaining part of this section.

If there are many deprecated packages, it is a good idea to update them.
> **Note:** Make sure you are in the app folder for this.

1. Start with this:
```npm update```

2. For major updates, install a global check:
```npm install -g npm-check-updates```

3. Get all of the latest versions:
```ncu -u```

4. Install all of the updates:
```npm install```

If there are still major vulnerabilities, you can also fix those:
1. Check for the issues:
```npm audit```

2. Force an update:
```npm audit fix --force```

> **Note:** Be cautious of the force command, as it could break the application.


## Connecting MySQL with the React App

**Open MySQL Workbench.**
If you need to set up MySQL with the configurator, go ahead and do that with everything default.

**Start the React app.**
In VS Code or an IDE of your choice, use the terminal to navigate to the ```login-app``` location. Make sure you ```cd``` into the folder. Type ```npm-start``` to start the app. This should pull up the app in a browser.

**Start the MySQL server.**
In the terminal, use ```sudo /etc/init.d/mysql start``` to start the server. Use ```sudo /etc/init.d/mysql status``` to check the status and make sure it is running.

Then, open MySQL Workbench.

If the start server commands above did not work, you can open the server through the MySQL Workbench program. In the navigator (on the left side panel), there should be a section called ```INSTANCE```. Click the option that says ```Startup / Shutdown``` to start the server.

*If you are unable to start the MySQL Workbench connection, follow these steps for the Access Denied Error:*

 1. In the terminal, run this: ```sudo mysql -u root -p```
 2. Run this to find out what users are running: ```SELECT user, host FROM mysql.user;```
 3. Use the following command to grant access to the users, but replace `'your_password'` with the actual password you'd like to use for the `root` user:
```
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' IDENTIFIED BY 'your_password' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

**Set up the MySQL server.**
Open MySQL Workbench if it is not open already and open


