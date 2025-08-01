import { initPlasmicLoader } from '@plasmicapp/loader-nextjs';
import OpenedPositionList from './components/OpenedPositionList';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: '9Vr5YWkf3w7jj6SsTcCEta', // 🟡 à remplacer
      token: 'IvzN3wRogyeRjfeLl1hqzdjIjkVBvUQXxxVMFtbbpBdxfeSyKuR8fwKkECaSQERdZAIiGsh8aXppCCjBiCYyg', // 🟡 à remplacer
    },
  ],
  preview: true,
  componentModules: [
  {
    name: 'OpenedPositionList',
    importPath: './components/OpenedPositionList',
    defaultExport: true,
  },
],
});