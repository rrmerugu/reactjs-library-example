

```bash 

npm i -D react typescript @types/react   


echo `{
  "compilerOptions": {
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "jsx": "react",
    "module": "ESNext",  
    "declaration": true,
    "declarationDir": "types",
    "sourceMap": true,
    "outDir": "dist",
    "moduleResolution": "node",
    "emitDeclarationOnly": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
  },
  "exclude": [
    "dist",
    "node_modules",
    "src/**/*.test.tsx",
    "src/**/*.stories.tsx",
  ],
}` >> tsconfig.json



npm i -D rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts
npm i -D tslib



```

https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe


