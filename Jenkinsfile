pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'web-app-image'
        DOCKER_TAG = 'latest'
        REGISTRY = 'docker.io'
        DOCKER_CREDENTIALS = 'admin'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Sopheaktraleng/tra-portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://${REGISTRY}', "${DOCKER_CREDENTIALS}") {
                        // Push the built image
                        docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push()
                    }
                }
            }
        }

        // Deploy to Docker Swarm
        stage('Deploy to Docker Swarm') {
            steps {
                script {
                    // Deploy the stack to Docker Swarm using docker-compose.yml
                    sh 'docker stack deploy -c docker-compose.yml web-app-stack'
                }
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
