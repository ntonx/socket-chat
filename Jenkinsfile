pipeline {
    agent 'any'
    
    stages {
        stage('Git'){
            steps{
                //echo bat(returnStdout: true, script: 'set')
                echo "Getting project from Github"
		git branch: 'master', url:"https://github.com/ntonx/socket-chat"
            }
        }
        
        stage('Build') { 
            steps {
	            // the comments must be defined in this section, bat is for Windows and sh for Linux
                echo "Installing project dependencies"
		bat 'npm install'
		echo "Installing selenium"
		bat 'npm install selenium-webdriver@4.1.2'
            }
        }
        stage('Deploy'){
            steps{
                echo "Starting application"
                bat 'forever start server/server.js'
                //sh 'nohup node server/server.js &' <this command is for linux>
            }
        }
        stage('Selenium test'){
            steps{
                // Otherwhise selenium-webdriver is in local computer, it is not detected by this project, so we hace to install inside this project
                echo "Executing selenium testing"
                bat 'node server/test/selenium.js'
		// ending execution
            }
        }
    }
}
