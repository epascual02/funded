# Funded Method — Landing page

Landing page en Next.js lista para desplegar en Vercel.

## Requisitos
- Node.js 18.17 o superior
- npm

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Configuración obligatoria antes de publicar

En `app/page.tsx`, buscá:

```ts
const WHATSAPP_NUMBER = "5491112345678";
```

El número ya está configurado. Si en el futuro lo cambiás, usá código de país y área, sin `+`, espacios ni guiones.

También revisá:
- El historial de USD 20.000: publicar solamente si podés respaldarlo con documentación verificable.
- El precio de USD 99 y las condiciones exactas de la mentoría.
- Los parámetros del sistema y que describan fielmente tu operativa.
- Las condiciones de cada empresa de fondeo que menciones en futuras versiones.

## Desplegar en Vercel

### Opción A: GitHub
1. Creá un repositorio nuevo en GitHub.
2. Subí el contenido de esta carpeta al repositorio.
3. Entrá a https://vercel.com e iniciá sesión.
4. Elegí **Add New → Project** e importá el repositorio.
5. Vercel detecta Next.js automáticamente.
6. Presioná **Deploy**.

### Opción B: CLI

```bash
npm install
npm install -g vercel
vercel
```

Seguí las instrucciones de la terminal. Para publicar producción:

```bash
vercel --prod
```

## Personalización
- Contenido y WhatsApp: `app/page.tsx`
- Diseño y estilos: `app/globals.css`
- Metadatos SEO: `app/layout.tsx`

## Nota
El nombre Funded Method es el nombre elegido para esta versión del sitio. Antes de registrar un dominio o marca, verificá disponibilidad y posibles conflictos de marca.


## Certificados de retiros

Subí copias editadas y anonimizadas a `public/certificados/`. Todo archivo dentro de `public/` queda públicamente accesible al desplegarse. Los certificados todavía no aparecen automáticamente en la página: revisalos y seleccioná cuáles querés mostrar para agregar una galería.
