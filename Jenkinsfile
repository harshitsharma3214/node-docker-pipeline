pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                dir('/app') {
                    sh 'docker build -t myapp:latest .'
                }
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop myapp || true
                docker rm myapp || true
                docker run -d -p 3000:3000 --name myapp myapp:latest
                '''
            }
        }
    }
}
