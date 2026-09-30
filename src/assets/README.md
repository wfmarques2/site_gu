# Assets

Esta pasta é destinada para imagens e recursos estáticos.

## Imagem do Cliente

Para adicionar a imagem do cliente no Hero Section:

1. Adicione sua imagem PNG recortada aqui com o nome `client-image.png`
2. O componente `Hero.tsx` já está preparado para receber a imagem
3. A imagem será automaticamente integrada com blend e sombras suaves

### Exemplo de uso:

```tsx
// No componente ClientImage dentro de Hero.tsx
<img
  src="/src/assets/client-image.png"
  alt="Cliente"
  className="w-full h-full object-contain drop-shadow-2xl"
  style={{
    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
  }}
/>
```




