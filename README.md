## I. Tools used:

## II. Core Concepts:

    1. How Does The Web Work ?

        a. Client Server Cycle:
            Client => Request => Server => Response => Client

            - User (Client) will enter an URL > URL will get to
            the DOMAIN LOOKUP to REQUEST a RESPONSE from
            SERVER:

                +, RESPONSE can contains all kind of data:
                Html pages, JSON, Image, Video, etc...

            - SERVER will contains backend Code (NodeJs,
            PHP, etc...) to handle these REQUEST and RESPONSES
            , interact with DATABASES, all kind of backend operations

            - SERVER then will return a RESPONSE to the USER
            to complete the cycle

        b. Protocol of communication between Client and Server
            (HTTP, HTTPS):
             - HTTP (Hyper Text Transfer Protocol): This is a
             Protocol (set of rules) for transferring data which
             is understood by Browser and Server

             - HTTPS (HTTP + Secure): is HTTP combined with
             Data Encryption (during Transmission)

    2. Node.JS LifeCycle:
        Run $node app.j > start script > Parse Code,
        Register Variables & Functions > Event Loop

        Event loop keeps running as long as there is
        an event listener registered. Function inside
        createServer() doesn't return an exit code so
        the event loop keeps running

        If you want to exit of the event loop,
        you can use: process.exit();
        This will stop your server. Typically
        you don't want to stop your server ever

    3. Requests, Streams and Buffer in NodeJS:
        - Search for the same thing in this documentation:
        https://docs.google.com/document/d/1fW7WSCaD98QZvdSwpHJEw5zn_TnahGeR5L_FRu__XnM/edit?usp=sharing

    4. Event Driven Code execution:
        - There is a common pattern in NodeJS that a function is passed
        within a function call then any code in the function call will
        only be registered to run as Asynchronous code
        - While waiting for the async code to run, the server go on
        to the next lines of code to execute. This is the idea of
        Event Driven Code Execution
        - The function within req.on() in 8th commit is an example for
        this concept

    5. Blocking Code and Non-Blocking Code:
        - Blocking code is synchrounous code that has to wait
        for one line of operation to finish until we can move on
        to next operations
        - The function fileSystem.writeFileSync() in 8th Commit
        is an example of blocking code. We have to wait for it
        to complete so that we can run the following lines

        - Non-Blocking code is Asynchronous code that run in the
        background while other operations are running
        - The function fileSystem.writeFile() in 9th Commit
        is an example of blocking code

## III. How To Use This Module:

    1. Creating a Node.js Server:
        - See code in 3rd commit to see how to
        create NodeJs server
        - 3rd Commit ends at video 27th

    2. Getting Request and Response Information:
        - Commit 4th to see request info,
        Commit 5th to see response info
        - On 5th Commit, IF YOU RUN THE SERVER, AND RELOAD localhost:4000
        YOU WILL SEE THE RESPONSE PAGE.

    3. Routing and Redirecting Requests:
        - 6th Commit to see the code
        - Code explaination:
            if user go to localhost:4000, showing the form w button
            if user click this button > direct to message with POST request

            user go to localhost:4000/message, if request was GET > show
            the default code
            if request was POST, redirect to localhost:4000/

    4. Getting Data from Requests:
        - See 3. Requests, Streams and Buffer in NodeJS above first
        to understand some basic concepts

        - 7th Commit to see the code
        - Code explaination:
            user go to localhost:4000, type something in input box,
            send message > The content will be written in
            message.txt file in the server
        - See req.on('data') and req.on('end') to understand how we
        do it

    5. Event Driven Code Execution:
        - See code in Commit 8th
        - To understand it, see the part 4 in the core concepts section

    6. Non-blocking vs Blocking Code:
        - See 9th commit and part 5 in the core concepts section

    7. How to import and export files in NodeJs:
        - See 10th commit, routes.js for exporting and
        app.js for importing
        - See 9th Commit for full comments of explanation of codes
        - See this video for summing up:

        https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561942#content

## IV. Tasks got left to do on this module:

    1. Understand how Javascript works behind the scene
        (Javascript with Browser):

    Video 113 Mastering the coding interview
    https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12334642#content
    2. Understand how NodeJS work behind the scene:
        (Javascript server)

    Video 37 NodeJS - The Complete Guide
    https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561908#content
