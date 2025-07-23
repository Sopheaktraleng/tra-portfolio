pipeline {
    agent any

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout') {
            steps {
                echo "Checking out the code from the repository"
                git branch: 'master', url: 'https://github.com/Sopheaktraleng/tra-portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image"
            }
        }

        stage('Push Docker Image') {
            steps {
                echo "Pushing Docker image to registry"
            }
        }

        stage('Deploy to Docker Swarm') {
            steps {
                echo "Deploying Docker image to Docker Swarm"
            }
        }
    }

    post {
        always {
            cleanWs()
        }

        success {
            echo "Deployment successful!"
        }

        failure {
            echo "Deployment failed!"
        }
    }
}