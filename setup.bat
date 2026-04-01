@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

echo.
echo ========================================
echo  Auto Profit Birth - Initial Setup
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if errorlevel 1 (
    echo ❌ ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    echo.
    echo After installing Node.js, run this script again.
    pause
    exit /b 1
)

echo ✅ Node.js detected
echo.

REM Display versions
echo 📋 Environment Information:
echo.
echo Node.js version:
node --version
echo.
echo npm version:
npm --version
echo.

REM Check if node_modules exists
if exist node_modules (
    echo 📦 node_modules already exists
    echo Skipping npm install
) else (
    echo 📦 Installing dependencies...
    echo.
    call npm install
    if errorlevel 1 (
        echo ❌ ERROR: npm install failed
        pause
        exit /b 1
    )
)

echo.
echo ✅ Setup completed successfully!
echo.
echo 🚀 Next steps:
echo   1. Run 'start.bat' to start the development server
echo   2. Or run 'build.bat' to create a production build
echo.

pause
