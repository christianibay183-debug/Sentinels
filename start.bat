@echo off
start "Flask" cmd /k "cd C:\Users\chris\Sentinels && python app.py"
start "Cloudflared" cmd /k "cd C:\Users\chris\Downloads && cloudflared-windows-amd64.exe tunnel --url http://localhost:5000"