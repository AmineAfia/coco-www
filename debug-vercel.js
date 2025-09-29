#!/usr/bin/env node

/**
 * Vercel Deployment Debug Script
 * Run this to diagnose Vercel-specific issues
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Vercel Deployment Debug Script');
console.log('=====================================\n');

// Check if build files exist
const buildDir = '.next';
const cssDir = '.next/static/css';

console.log('📁 Checking build files...');
if (fs.existsSync(buildDir)) {
  console.log('✅ .next directory exists');
  
  if (fs.existsSync(cssDir)) {
    console.log('✅ CSS directory exists');
    const cssFiles = fs.readdirSync(cssDir);
    console.log(`📄 CSS files: ${cssFiles.join(', ')}`);
    
    // Check CSS content
    cssFiles.forEach(file => {
      const filePath = path.join(cssDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      console.log(`\n📋 Checking ${file}:`);
      console.log(`   Size: ${(content.length / 1024).toFixed(2)} KB`);
      
      // Check for critical classes
      const criticalClasses = [
        'bg-warm-gradient',
        'bg-coral-gradient', 
        'shadow-soft',
        'btn-primary'
      ];
      
      criticalClasses.forEach(cls => {
        if (content.includes(cls)) {
          console.log(`   ✅ ${cls} found`);
        } else {
          console.log(`   ❌ ${cls} MISSING`);
        }
      });
    });
  } else {
    console.log('❌ CSS directory missing');
  }
} else {
  console.log('❌ .next directory missing - run pnpm build first');
}

// Check package.json
console.log('\n📦 Checking dependencies...');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

const requiredDeps = ['tailwindcss', 'autoprefixer', 'postcss'];
requiredDeps.forEach(dep => {
  if (packageJson.dependencies?.[dep] || packageJson.devDependencies?.[dep]) {
    console.log(`✅ ${dep} installed`);
  } else {
    console.log(`❌ ${dep} MISSING`);
  }
});

// Check PostCSS config
console.log('\n⚙️  Checking PostCSS config...');
if (fs.existsSync('postcss.config.mjs')) {
  const postcssConfig = fs.readFileSync('postcss.config.mjs', 'utf8');
  if (postcssConfig.includes('autoprefixer')) {
    console.log('✅ autoprefixer configured');
  } else {
    console.log('❌ autoprefixer not configured');
  }
} else {
  console.log('❌ postcss.config.mjs missing');
}

// Check Tailwind config
console.log('\n🎨 Checking Tailwind config...');
if (fs.existsSync('tailwind.config.ts')) {
  const tailwindConfig = fs.readFileSync('tailwind.config.ts', 'utf8');
  if (tailwindConfig.includes('content:')) {
    console.log('✅ Tailwind content paths configured');
  } else {
    console.log('❌ Tailwind content paths missing');
  }
} else {
  console.log('❌ tailwind.config.ts missing');
}

console.log('\n🚀 Vercel Deployment Checklist:');
console.log('1. Set NODE_ENV=production in Vercel environment variables');
console.log('2. Set NEXT_PUBLIC_APP_URL to your Vercel domain');
console.log('3. Clear Vercel build cache (uncheck "Use existing Build Cache")');
console.log('4. Ensure Node.js version is 18.x or 20.x');
console.log('5. Check Vercel build logs for CSS compilation errors');

console.log('\n✨ If all checks pass locally but fail on Vercel:');
console.log('- Try deploying with a minimal change to force rebuild');
console.log('- Check if Vercel is using a different Node.js version');
console.log('- Verify all environment variables are set correctly');
