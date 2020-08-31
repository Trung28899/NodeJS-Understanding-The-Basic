I. Tools used: 

II. Core Concepts: 
    1. How Does The Web Work ? 
        
        a. Client Server Cycle
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

    3. Using Node Core Modules: 

    4. Basic of Working with Requests & Responses

    5. Asynchronous Code & The Event Loop: 

III. How To Use This Module: 
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
