pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = 'acd3834c-7699-48c1-8b49-6159eb9c3df3'
        NETLIFY_AUTH_TOKEN = credentials('netlifyToken')
    }

    stages {
    stage('Build') {
        agent {
            docker {
                image 'node:18-alpine'
                reuseNode true
            }
        }
        steps {
            echo " Verifying required files..."
            sh '''
                test -f index.html || (echo "index.html is missing!" && exit 1)
                test -f netlify/functions/random-lottery.js || (echo " The random menu function is missing!" && exit 1)
                echo "All necessary files are in place!"
            '''
        }
    }

    stage('Test') {
        agent {
            docker {
                image 'node:18-alpine'
                reuseNode true
            }
        }
        steps {
            echo "Running function load test..."
            sh '''
                node -e "require('./netlify/functions/random-lottery.js'); console.log('Function loaded successfully!')"
            '''
        }
    }

    stage('Deploy') {
        agent {
            docker {
                image 'node:18-alpine'
                reuseNode true
            }
        }
        steps {
            echo "Deploying the project to Netlify..."
            sh '''
                npm install netlify-cli
                node_modules/.bin/netlify deploy \
                  --auth=$NETLIFY_AUTH_TOKEN \
                  --site=$NETLIFY_SITE_ID \
                  --dir=. \
                  --prod
            '''
        }
    }

    stage('Post Deploy') {
        steps {
            echo "🎉 Deployment is complete! Your website is now live."
        }
    }
}

post {
    success {
        echo "CI/CD pipeline executed successfully!"
    }
    failure {
        echo " An error occurred during the pipeline execution. Please check the logs! "
    }
}

        
}