pipeline {
    agent 'any'
    
    stages {
        stage('Git'){
            steps{
                echo bat(returnStdout: true, script: 'set')
                git branch: 'master', url:"https://github.com/ntonx/socket-chat"
            }
        }
        
        stage('Build') { 
            steps {
	            // the comments must be defined in this section, bat is for Windows and sh for Linux
                bat 'npm install'
            }
        }
        stage('Deploy'){
            steps{
                
                bat 'forever start server/server.js'
                //sh 'nohup node server/server.js &' <this command is for linux>
            }
        }
        stage('Selenium test'){
            steps{
                // Otherwhise selenium-webdriver is in local computer, it is not detected by this project, so we hace to install inside this project
                bat 'npm install selenium-webdriver@4.1.2'
                bat 'node server/test/selenium.js'
		// ending execution
            }
        }
    }
}
