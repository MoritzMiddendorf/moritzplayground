Write-Host "🧹 Clearing known caches..."
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm cache clean --force
Remove-Item -Recurse -Force .vercel/cache -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules/.cache -ErrorAction SilentlyContinue

Write-Host "🚀 Installing dependencies..."
npm install

npm run dev