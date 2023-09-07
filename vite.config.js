import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // pokeman_store is your repository name
  base:'/pokeman_store/'
})

// in settings on github, go to actions
// allow all actions and reusable workflows
// -Require approval for all outside collaborators
// Read and write permissions
// allow github actions to create and approve pull requests

// in settings, go to pages
// choose to deploy from branch and save
// once your actions have processed, choose gh-pages as the branch (it should not be main branch)

// include a new key value in package.json
// "homepage": "https://your-username.github.io/your repo name/"
