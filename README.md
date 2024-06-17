Georgina Rimmer - Tech Returners launchpad project - Exhibition Curation Website


This project is hosted at: https://global-gallery.netlify.app/


OR to run the project locally on your device:

1. INSTALL REQUIRED SOFTWARE
You will need an integrated development environment (IDE) to be able to view the code. I recommend VSCode: https://code.visualstudio.com/download
In your IDE you need to open a terminal. In VSCode this is in the top menu Terminal > New Terminal. A box with cursor should appear.
Install Node, npm/homebrew and git:
*LINUX*
    type these commands in the terminal:
    'sudo apt update'
    'sudo apt install -g nodejs npm git' 
*MAC*
    type these commands in the terminal:
    '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'
    'brew install node'
    'brew install git'
*WINDOWS*
    Download and install Node.js and npm from https://nodejs.org/en/
    Download and install Git from https://git-scm.com/downloads

2. CHOSE PROJECT FOLDER
The terminal displays the current folder path, here you can use the commands: 
    'cd ..' to navigate up the folder structure
    'ls' to view contents of the current folder 
    'cd <foldername>' to navigate to a specific folder
    'mkdir <newfoldername>' to create a new folder

3. OPEN PROJECT CODE
Once you have navigated to the project folder you can use the commands: 
    'git clone https://github.com/Georgie-x/global-gallery.git' to copy the project repo to your device
    'cd launchpad-project' to navigate to the folder
    'code .' to open a new window with the project code

4. ADD SOFTWARE DEPENDENCIES
In a new terminal in the project window type: 
    'npm install' to install additional required software

5. PREPARE ENVIRONMENTAL VARIBLES
This project connects with Rijksmuseum and an API key (password) is needed to collect information from their website.
    create a Rijks Studio account to obtain an API key https://www.rijksmuseum.nl/en/rijksstudio
A ".gitignore" file needs be added to protect information in sensitive files
    type 'touch .gitignore' 
    in the .gitignore file add '.env' to a new line 
An "environmental varibles" file (.env) needs be added to ensure your API key is included, but remains private
    type 'touch .env'
    in the .env file add the line 'VITE_RIJKS_API_KEY=<your-api-key>'

6. RUN PROJECT CODE
Finally you can type:
'npm run dev' which provides a link to open the project in the browser.
