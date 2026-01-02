import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function captureHTML() {
  console.log('🚀 Capturando HTML renderizado...\n');
  
  let browser;
  try {
    // Lanzar navegador
    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    // Navegar a la app
    console.log('📡 Conectando a http://localhost:5174...');
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle' });
    
    // Esperar a que React renderice
    await page.waitForTimeout(2000);
    
    // Obtener el HTML del body
    const bodyHTML = await page.evaluate(() => {
      const root = document.querySelector('#root');
      return root ? root.innerHTML : document.body.innerHTML;
    });
    
    console.log('✅ HTML capturado exitosamente\n');
    
    // Cargar el template
    const templatePath = path.join(__dirname, '..', 'dist', 'mexico.html');
    let template = fs.readFileSync(templatePath, 'utf-8');
    
    // Reemplazar el placeholder con el HTML real
    const placeholder = /<!-- \n  ========================================[\s\S]*?-->/;
    template = template.replace(placeholder, bodyHTML);
    
    // Guardar el archivo final
    const outputPath = path.join(__dirname, '..', 'dist', 'mexico-final.html');
    fs.writeFileSync(outputPath, template, 'utf-8');
    
    console.log('📄 Archivo generado: dist/mexico-final.html');
    console.log('\n🎉 ¡HTML estático completo generado!\n');
    console.log('📋 Próximos pasos:');
    console.log('   1. Abre dist/mexico-final.html en tu navegador');
    console.log('   2. Verifica que todo funcione (accordions, estilos)');
    console.log('   3. Copia el contenido completo a Directus\n');
    
    await browser.close();
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (browser) await browser.close();
    process.exit(1);
  }
}

captureHTML();
