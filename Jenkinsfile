pipeline {
    agent 'any' 
    stages {
        stage('Git'){
            steps{
                git branch: 'master', url='https://github.com/ntonx/socket-chat'
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
                bat 'node server/server.js'
            }
        }
    }
}
