import { execSync } from 'child_process'
const commitMsg = process.argv[2] || 'Auto commit'// Get message from CLI args
const runDev = process.argv[3] ? true : false

const br = () => {
    console.log('------------------------------------------------------')
}

try{

    console.log('👽 : 📥 Adding files to git')
    execSync('git add .', { stdio: 'inherit' })
    br()

    console.log(`👽 : 📤 Committing with message "📋 : '${commitMsg}'"`)
    execSync(`git commit -m "${commitMsg}"`, { stdio: 'inherit' })
    br()

    console.log('👽 : 🚀 Pushing to repository...')
    execSync('git push', { shell: true, stdio: 'inherit' })
    br()

    console.log('✅ Deployment completed!')
    br()
    br()
    

    if(runDev){
        console.log('👽 : Starting Server')
        execSync('npm run dev', { stdio: 'inherit' })
        br()
    }

}catch ( error ) {
    console.log('❌❌❌ Error:')
    console.error(error.message)
}
