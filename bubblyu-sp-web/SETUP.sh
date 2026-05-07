#!/bin/bash

# Bubblyu SP Web - GitHub Setup Script
# This script helps you set up the project for GitHub and Vercel deployment

echo "🚀 Bubblyu SP Web - GitHub Setup"
echo "================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Get user information
read -p "Enter your GitHub username: " GITHUB_USERNAME
read -p "Enter your email: " EMAIL
read -p "Enter your name: " NAME

# Initialize git repository
echo ""
echo "📦 Initializing Git repository..."
git init
git config user.email "$EMAIL"
git config user.name "$NAME"

# Add all files
echo "📝 Adding files to Git..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Bubblyu SP landing page"

# Add remote repository
echo ""
echo "🔗 Setting up remote repository..."
echo "Repository URL: https://github.com/$GITHUB_USERNAME/bubblyu-sp-web.git"
git remote add origin "https://github.com/$GITHUB_USERNAME/bubblyu-sp-web.git"

# Change branch to main
git branch -M main

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub (https://github.com/new)"
echo "   - Repository name: bubblyu-sp-web"
echo "   - Description: Bubblyu SP - Sudden Attack Trading Brand Landing Page"
echo "   - Do NOT initialize with README, .gitignore, or license"
echo ""
echo "2. Push to GitHub:"
echo "   git push -u origin main"
echo ""
echo "3. Deploy to Vercel:"
echo "   - Visit https://vercel.com"
echo "   - Click 'New Project'"
echo "   - Select the bubblyu-sp-web repository"
echo "   - Click 'Deploy'"
echo ""
