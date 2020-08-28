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

III. How To Use This Module: 
    1. Creating a Node.js Server:
        - See code in 1st commit to see how to 
        create NodeJs server