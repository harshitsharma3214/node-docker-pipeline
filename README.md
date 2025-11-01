# 🚀 Node.js Docker CI/CD Pipeline with Jenkins

This project demonstrates a **Node.js web application** containerized with **Docker** and automated using **Jenkins CI/CD**.  
It builds a lightweight Node.js app, creates a Docker image, and runs it in a container using a Jenkins pipeline.

---

## 🧠 Project Overview

The goal of this project is to:
- Build and containerize a simple Node.js app using Docker.
- Automate build and deployment using Jenkins pipeline.
- Push the project code to GitHub for version control.

---

## ⚙️ Tech Stack

- **Node.js** (v20)
- **Express.js** for the web server
- **Docker**
- **Jenkins** (LTS with JDK 17)
- **GitHub** for SCM integration

---

## 📁 Project Structure

files_docker/
│
├── Dockerfile # Defines the Docker image for the Node app
├── server.js # Simple Express server
├── package.json # Node dependencies
├── index.html # Web page served by the app
└── Jenkinsfile # Jenkins pipeline script (optional)


---

## 🧩 Jenkins Pipeline Overview

### Pipeline Stages:
1. **Build Docker Image**  
   Jenkins builds the Docker image using the `Dockerfile`.

2. **Run Container**  
   Any existing container named `myapp` is stopped and removed.  
   A new container is started from the latest image.

---

## 🐳 Docker Commands (Manual Build/Run)

To build and run manually (without Jenkins):

```bash
# Build Docker image
docker build -t myapp:latest .

# Run container
docker run -d -p 3000:3000 --name myapp myapp:latest

To stop the container:

docker stop myapp && docker rm myapp
💡 Jenkinsfile Example

Here’s a sample declarative Jenkins pipeline:

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

🧠 How to Integrate with GitHub and Jenkins

Push this project to GitHub:

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<your-username>/node-docker-pipeline.git
git branch -M main
git push -u origin main


Configure Jenkins:

Create a new Pipeline project.

Set SCM to Git and use your repo URL.

Add the above Jenkinsfile or script directly in Jenkins.

🧩 Author

Harshit Sharma
DevOps Enthusiast | Cloud Learner | Building Scalable CI/CD Pipelines
🔗 GitHub
