#!/usr/bin/env node

/**
 * Script para corregir imports automáticamente en app/components/
 * Ejecutar con: node fix-imports.js
 */

const fs = require('fs');
const path = require('path');

const appComponentsDir = path.join(__dirname, 'app', 'components');

function fixImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Reemplazar @/lib/utils -> @/src/lib/utils
  if (content.includes('@/lib/utils')) {
    content = content.replace(/from ['"]@\/lib\/utils['"]/g, "from '@/src/lib/utils'");
    modified = true;
  }

  // Reemplazar @/components/ -> @/app/components/ (solo si no está ya en app/components)
  if (content.includes("@/components/") && !content.includes("@/app/components/")) {
    content = content.replace(/from ['"]@\/components\//g, "from '@/app/components/");
    modified = true;
  }

  // Reemplazar @/hooks/ -> @/src/hooks/
  if (content.includes('@/hooks/')) {
    content = content.replace(/from ['"]@\/hooks\//g, "from '@/src/hooks/");
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed: ${filePath}`);
    return true;
  }
  return false;
}

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

console.log('🔧 Corrigiendo imports en app/components/...\n');

const files = walkDir(appComponentsDir);
let fixedCount = 0;

files.forEach(file => {
  if (fixImportsInFile(file)) {
    fixedCount++;
  }
});

console.log(`\n✅ Proceso completado. ${fixedCount} archivos modificados.`);

