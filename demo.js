body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    
    font-family: Arial, sans-serif;
}



#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(8, 8, 8); 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  background: rgba(255, 255, 255, 0); 
  z-index: 10; 
  transition: top 0.3s; 
  padding: 10px 20px;
  /* transition: background-color 0.3s, top 0.3s; */
 
  
}

#header .logo img {
    max-height: 50px;
}

.video-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.officevideo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
    filter: brightness(50%); /* Reduce brightness */
}

@media (max-width: 768px) {
    .officevideo {
        display: none; /* Hide video on small screens */
    }
}

.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #e6ebe4;
    background: rgba(0, 0, 0, 0.75); /* Darker semi-transparent background */
    padding: 20px;
    border-radius: 10px;
    z-index: 1;
    width: 80%;
    max-width: 600px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
}

@media (max-width: 768px) {
    .content {
        width: 90%;
        padding: 15px;
    }
}

@media (max-width: 480px) {
    .content {
        width: 95%;
        padding: 10px;
    }

    .content h1 {
        font-size: 1.5rem;
    }

    .content h2 {
        font-size: 1rem;
    }

    .content a.btn {
        padding: 8px 16px;
        font-size: 0.875rem;
    }
}

.content h1, .content h2 {
    margin: 0;
    padding: 10px 0;
}

.content a.btn {
    display: inline-block;
    margin: 10px;
    padding: 10px 20px;
    color: #fff;
    text-decoration: none;
    background-color: #007bff;
    border-radius: 5px;
    font-weight: bold;
}

.content a.btn:hover {
    background-color: #0056b3;
}