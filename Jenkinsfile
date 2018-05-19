node('master'){
   
    stage('Clear Workspace'){
	  echo "Clear Workspace"
      deleteDir()
    }
	
	stage('Checkout'){
	  echo "Cloning Git Repository"
      checkout scm
    }
}
