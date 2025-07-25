import { exec } from 'child_process'
import fs from 'fs'

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))

if (!pkg.name.startsWith('@lordobitodev/')) {
  console.log('❌ Le package ne porte pas le bon nom.')
  process.exit(1)
}

exec('npm publish --access public', (err, stdout, stderr) => {
  if (err) {
    console.error('❌ Erreur de publication :', stderr)
    process.exit(1)
  }
  console.log('✅ Publication réussie sur NPM :\n', stdout)
})
