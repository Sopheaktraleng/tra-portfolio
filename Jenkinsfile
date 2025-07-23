pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "sopheaktraleng/web-app-image"
        DOCKER_TAG = "latest"
        DOCKER_CREDENTIALS = "jenkins"
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout') {
            steps {
                echo "Checking out the code from GitHub"
                git branch: 'master', url: 'https://github.com/Sopheaktraleng/tra-portfolio.git'
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                    withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                        sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    }
                }
            }
        }

        stage('Deploy to Docker Swarm') {
            steps {
                script {
                    sshPublisher(publishers: [
                        sshPublisherDesc(
                            configName: "swarm",
                            transfers: [
                                sshTransfer(
                                    sourceFiles: "docker-compose.yml",
                                    removePrefix: "",
                                    remoteDirectory: "",
                                    execCommand: "docker stack deploy network --compose-file /root/docker-compose.yml"
                                )
                            ]
                        )
                    ])
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