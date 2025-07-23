pipeline {
    agent any

    stages {
        stage('clean workspace') {
            steps {
                cleanWs()
            }
        }
        stage('Checkout') {
            steps {
                // 
                echo "Checking out the code from the repository"
            }
        }

        stage('Build Docker Image') {
            steps {
                // script {
                //     docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                // }
                echo "Building Docker image"
            }
        }

        stage('Push Docker Image') {
            steps {
                // script {
                //     docker.withRegistry('https://${REGISTRY}', "${DOCKER_CREDENTIALS}") {
                //         docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push()
                //     }
                // }
                echo "Pushing Docker image to registry"
            }
        }

        stage('Deploy to Docker Swarm') {
            // 
            echo "Deploying Docker image to Docker Swarm"
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
