/// <reference types="vite/client" />

interface ImportMetaEnv {
   readonly VITE_APP_TITLE: string;
   readonly VITE_PORT: number;
   readonly VITE_STRIPE_PUBLIC_KEY: string;
   readonly VITE_SERVER_URL: string;
   // more env variables...
}

interface ImportMeta {
   readonly env: ImportMetaEnv;
}
