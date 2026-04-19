import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  assetsInclude: [
    '**/*.svg', '**/*.csv',

    // Images
    '**/*.jpg', '**/*.JPG',
    '**/*.jpeg', '**/*.JPEG',
    '**/*.png', '**/*.PNG',
    '**/*.webp', '**/*.gif',

    // Videos (added)
    '**/*.mp4',
    '**/*.webm',
    '**/*.ogg',
    '**/*.mov',
    '**/*.avi',
    '**/*.mkv',
  ],
})