@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

echo.
echo ========================================
echo  Auto Profit Birth - Production Build
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if errorlevel 1 (
    echo ❌ ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm packages are installed
if not exist node_modules (
    echo 📦 Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo ❌ ERROR: npm install failed
        pause
        exit /b 1
    )
)

echo.
echo 🔨 Building application...
echo.

call npm run build

if errorlevel 1 (
    echo ❌ ERROR: Build failed
    pause
    exit /b 1
)

echo.
echo ✅ Build completed successfully!
echo 📂 Output directory: dist/
echo.

pause
